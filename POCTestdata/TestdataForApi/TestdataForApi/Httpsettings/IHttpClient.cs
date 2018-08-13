using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;

namespace TestdataForApi.Httpsettings
{
    public interface IHttpClient
    {
        string BaseAddress { get; set; }

        string MediaType { get; set; }

        AuthenticationHeaderValue AuthenticationHeader { get; set; }

        TModel GetRequest<TModel>(string query);

        TModel PostRequest<TModel>(string query, HttpContent content, Dictionary<string, string> headers = null);

        HttpResponseMessage PostRequest(string query, HttpContent content, Dictionary<string, string> headers = null);

        HttpResponseMessage PatchRequest<TModel>(string url, TModel model);

        TModel PutRequest<TModel>(string url, HttpContent content, Dictionary<string, string> headers = null);

        HttpResponseMessage DeleteRequest(string url, Dictionary<string, string> headers = null);
    }
}
