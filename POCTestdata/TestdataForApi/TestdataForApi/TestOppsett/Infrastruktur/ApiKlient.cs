    using System;
    using System.Collections.Generic;
    using System.Net;
    using System.Net.Http;
    using System.Net.Http.Headers;
    using System.Text;
    using System.Threading.Tasks;
    using Newtonsoft.Json;
    using TestdataForApi.Httpsettings;

namespace TestdataForApi.TestOppsett.Infrastruktur
    {
    public static class ApiKlient
        {
            private static readonly Dictionary<string, string> Headers = new Dictionary<string, string>{
            {"Accept", "application/json"},
            {"Content-Type", "application/json"},
            {"pragma", "no-cache"},
            {"cache-control", "no-cache"}
        };
            private static readonly HttpClientWrapper Klient = new HttpClientWrapper
            {
                BaseAddress = Konfigurasjon.ApiRoot,
                WindowsAuthentication = true
            };
            public static T ApiGet<T>(string url)
            {
                return Klient.GetRequest<T>(url);
            }
            public static object ApiGet(string url)
            {
                return Klient.GetRequest<object>(url);
            }
            public static T ApiPost<T>(string url, object model)
            {
                using (var content =
                    new StringContent(JsonConvert.SerializeObject(model), Encoding.UTF8, "application/json"))
                {
                    return Klient.PostRequest<T>(url, content, Headers);
                }
            }

            public static HttpResponseMessage ApiPost(string url, object model)
            {
                using (var content =
                    new StringContent(JsonConvert.SerializeObject(model), Encoding.UTF8, "application/json"))
                {
                    return Klient.PostRequest(url, content, Headers);
                }
            }

            public static HttpResponseMessage ApiPostMedType<TModell>(string url, TModell model)
            {
                var data = JsonConvert.SerializeObject(model);
                return Utfør(
                    c => c.PostAsync(url, new StringContent(data, Encoding.UTF8, "application/json")).Result,
                    url);
            }

            public static HttpResponseMessage ApiPostUtenBody(string url)
            {
                return Utfør(
                    c => c.PostAsync(url, null).Result,
                    url);
            }

            public static T ApiPut<T>(string url, object model)
            {
                using (var content = new StringContent(JsonConvert.SerializeObject(model), Encoding.UTF8, "application/json"))
                {
                    return Klient.PutRequest<T>(url, content, Headers);
                }
            }

            public static HttpResponseMessage ApiPut(string url, object model)
            {
                using (var content = new StringContent(JsonConvert.SerializeObject(model), Encoding.UTF8, "application/json"))
                {
                    return Klient.PutRequest(url, content, Headers);
                }
            }

            public static HttpResponseMessage ApiDelete(string url)
            {
                return Klient.DeleteRequest(url, Headers);
            }
            public static Task<HttpResponseMessage> PatchAsync(this HttpClient client, string requestUri, HttpContent content)
            {
                if (client == null)
                {
                    return null;
                }
                var request = new HttpRequestMessage
                {
                    Method = new HttpMethod("PATCH"),
                    RequestUri = new Uri(client.BaseAddress + requestUri),
                    Content = content,
                };

                return client.SendAsync(request);
            }
            public static HttpResponseMessage ApiPatch(string requestUri, int model)
            {
                using (var content = new StringContent(JsonConvert.SerializeObject(model), Encoding.UTF8, "application/json"))
                {
                    var httpHandler = new HttpClientHandler
                    {
                        Credentials = CredentialCache.DefaultNetworkCredentials
                    };
                    var httpKlient = new HttpClient(httpHandler) { BaseAddress = new Uri(Konfigurasjon.ApiRoot) };
                    return httpKlient.PatchAsync(requestUri, content).Result;
                }
            }

            public static HttpResponseMessage ApiPatchUtenBody(string requestUri)
            {
                return Utfør(
                    c => c.PatchAsync(requestUri, null).Result,
                    requestUri);
            }
            public static HttpResponseMessage ApiPutUtenBody(string requestUri)
            {
                return Utfør(
                    c => c.PutAsync(requestUri, null).Result,
                    requestUri);
            }

            private static HttpClient LagKlient()
            {
                var klient = new HttpClient(new HttpClientHandler { Credentials = CredentialCache.DefaultNetworkCredentials });
                InitKlient(klient);
                return klient;
            }

            private static void InitKlient(HttpClient klient)
            {
                klient.BaseAddress = new Uri(Konfigurasjon.ApiRoot + "/api/");
                klient.DefaultRequestHeaders.Accept.Clear();
                klient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            }

            private static HttpResponseMessage Utfør(Func<HttpClient, HttpResponseMessage> handling, string url)
            {
                var klient = LagKlient();
                try
                {
                    return handling(klient);
                }
                catch (Exception exception)
                {
                    var feilmelding = $"Feil i kall mot {Konfigurasjon.ApiRoot}{url}, feilmelding {exception.Message}";
                    throw new ArgumentException(feilmelding, exception);
                }
            }
        }
    }
