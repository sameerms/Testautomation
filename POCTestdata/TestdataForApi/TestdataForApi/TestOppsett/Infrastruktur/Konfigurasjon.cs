using System;
using System.Configuration;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestdataForApi.TestOppsett.Infrastruktur


{
    public static class Konfigurasjon
    {
        public static string Root => AppKonfig("rootUrl");

        public static string ApiRoot => AppKonfig("apiUrl");

        public static string EHelseTestDataApiKey => AppKonfig("eHelseTestDataApiKey");


        private static string AppKonfig(string key)
        {
            var value = ConfigurationManager.AppSettings[key];

            if (string.IsNullOrEmpty(value))
            {
                throw new ArgumentException($"Feil i konfigurasjon: '{key}' må settes.");
            }

            return value;
        }
    }
}