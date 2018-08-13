// Decompiled with JetBrains decompiler
// Type: Hdir.Core.Web.HttpClientWrapper
// Assembly: Hdir.Core.Web, Version=1.0.6612.20084, Culture=neutral, PublicKeyToken=null
// MVID: 82B558AE-2A15-444C-A1EB-0E150AC811AC
// Assembly location: C:\Users\admssawa\AppData\Local\Temp\2\Tehahem\58a0591664\lib\net461\Hdir.Core.Web.dll


using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using Newtonsoft.Json;


namespace TestdataForApi.Httpsettings
{
    public class HttpClientWrapper : IHttpClient
    {
        private HttpClient _httpClient;

        public string BaseAddress { get; set; }

        public string MediaType { get; set; } = "application/json";

        public AuthenticationHeaderValue AuthenticationHeader { get; set; }

        public bool WindowsAuthentication { get; set; }

        public HttpClient HttpClient
        {
            get
            {
                HttpClient httpClient = this._httpClient;
                if (httpClient != null)
                    return httpClient;
                return new HttpClient((HttpMessageHandler)new HttpClientHandler()
                {
                    Credentials = (this.WindowsAuthentication ? (ICredentials)CredentialCache.DefaultNetworkCredentials : CredentialCache.DefaultCredentials)
                });
            }
            set => this._httpClient = value;
        }

        public TModel GetRequest<TModel>(string query)
        {
            using (HttpClient httpClient = this.HttpClient)
            {
                this.SetAdresseOgHeaderInformasjon(httpClient);
                httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue(this.MediaType));
                var response = HttpClientWrapper.ExecuteRequest((Func<HttpClient, HttpResponseMessage>)(c => c.GetAsync(query).Result), httpClient, query);
                return response.StatusCode == HttpStatusCode.NoContent ? default(TModel) : HttpClientWrapper.DeserializeJson<TModel>(response);
            }
        }

        public HttpResponseMessage PostRequest(string query, HttpContent content, Dictionary<string, string> headers = null)
        {
            using (var httpClient = this.HttpClient)
            {
                SetAdresseOgHeaderInformasjon(httpClient);
                return HttpClientWrapper.ExecuteRequest((Func<HttpClient, HttpResponseMessage>)(c => c.PostAsync(query, content).Result), httpClient, query);
            }
        }

        public TModel PostRequest<TModel>(string query, HttpContent content, Dictionary<string, string> headers = null)
        {
            using (var httpClient = HttpClient)
            {
                this.SetAdresseOgHeaderInformasjon(httpClient);
                return HttpClientWrapper.DeserializeJson<TModel>(HttpClientWrapper.ExecuteRequest((Func<HttpClient, HttpResponseMessage>)(c => c.PostAsync(query, content).Result), httpClient, query));
            }
        }

        public HttpResponseMessage PatchRequest<TModel>(string query, TModel model)
        {
            using (var httpClient = this.HttpClient)
            {
                this.SetAdresseOgHeaderInformasjon(httpClient);
                var content = JsonConvert.SerializeObject((object)model);
                return HttpClientWrapper.ExecuteRequest((Func<HttpClient, HttpResponseMessage>)(c => c.SendAsync(new HttpRequestMessage(new HttpMethod("PATCH"), query)
                {
                    Content = (HttpContent)new StringContent(content, Encoding.UTF8, "application/json")
                }).Result), httpClient, query);
            }
        }

        public HttpResponseMessage PutRequest(string query, HttpContent content, Dictionary<string, string> headers = null)
        {
            using (HttpClient httpClient = this.HttpClient)
            {
                this.SetAdresseOgHeaderInformasjon(httpClient);
                return HttpClientWrapper.ExecuteRequest((Func<HttpClient, HttpResponseMessage>)(c => c.PutAsync(query, content).Result), httpClient, query);
            }
        }

        public TModel PutRequest<TModel>(string query, HttpContent content, Dictionary<string, string> headers = null)
        {
            using (HttpClient httpClient = this.HttpClient)
            {
                this.SetAdresseOgHeaderInformasjon(httpClient);
                return HttpClientWrapper.DeserializeJson<TModel>(HttpClientWrapper.ExecuteRequest((Func<HttpClient, HttpResponseMessage>)(c => c.PutAsync(query, content).Result), httpClient, query));
            }
        }

        public HttpResponseMessage DeleteRequest(string query, Dictionary<string, string> headers = null)
        {
            using (HttpClient httpClient = this.HttpClient)
            {
                this.SetAdresseOgHeaderInformasjon(httpClient);
                return HttpClientWrapper.ExecuteRequest((Func<HttpClient, HttpResponseMessage>)(c => c.DeleteAsync(query).Result), httpClient, query);
            }
        }

        private static HttpResponseMessage ExecuteRequest(Func<HttpClient, HttpResponseMessage> request, HttpClient client, string query)
        {
            HttpResponseMessage httpResponseMessage;
            try
            {
                httpResponseMessage = request(client);
            }
            catch (Exception ex)
            {
                throw new HdirHttpException("Ikke kontakt med ekstern tjeneste. ", string.Format("{0}", (object)(client.BaseAddress.ToString() + query)), HttpStatusCode.BadGateway, (string)null);
            }
            if (httpResponseMessage.IsSuccessStatusCode)
                return httpResponseMessage;
            string originalString = httpResponseMessage.RequestMessage.RequestUri.OriginalString;
            HttpContent content1 = httpResponseMessage.Content;
            string content2 = content1 != null ? content1.ReadAsStringAsync().Result : (string)null;
            throw new HdirHttpException(string.Format("Deserialiseringsfeil {0}", (object)query), originalString, httpResponseMessage.StatusCode, content2);
        }

        private void SetAdresseOgHeaderInformasjon(HttpClient client)
        {
            client.DefaultRequestHeaders.Accept.Clear();
            if (this.BaseAddress != null)
                client.BaseAddress = new Uri(this.BaseAddress);
            if (this.AuthenticationHeader == null)
                return;
            client.DefaultRequestHeaders.Authorization = this.AuthenticationHeader;
        }

        private static TModel DeserializeJson<TModel>(HttpResponseMessage response)
        {
            string result = response.Content.ReadAsStringAsync().Result;
            try
            {
                return JsonConvert.DeserializeObject<TModel>(result);
            }
            catch (JsonReaderException ex)
            {
                throw new HdirHttpException(string.Format("Deserialiseringsfeil: {0}", (object)((Exception)ex).Message), response.RequestMessage.RequestUri.ToString(), response.StatusCode, result);
            }
        }
    }

   
}
