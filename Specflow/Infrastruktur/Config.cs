using System;
using System.Configuration;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace aTest.Infrastruktur
{
    public class Config
    {
        public static string Root => Get("root");

        private static string Get(string key)
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
