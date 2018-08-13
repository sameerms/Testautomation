using System;
using System.IO;
using System.Threading;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OWASPZAPDotNetAPI;


namespace OwaspZapSecurityTesting.Tests
{
    [TestClass]
    public class SecurityTests
    {
        private const string ZapApiKey = "rt1354m38v6k18pcpqcb7ejj2l"; //"rt1354m38v6k18pcpqcb7ejj2l"; 
        private const string ZapUrl = "localhost";
        private const int ZapPort = 8090;
        private const string TargetUrl = "http://elsa-portalsit.utvikling.local/";  


        private static ClientApi _zapClient; 
         private IApiResponse _response;
        [ClassInitialize]
        public static void Initialize(TestContext context)
        {
            Zap.StartZapUi();
            _zapClient = new ClientApi(ZapUrl, ZapPort, ZapApiKey);
        }

        [TestMethod]
        public void EksekvereSpideren()
        {
            var spiderId = StarteSpidering();
            SjekkeSpiderUtvikling(spiderId);
        }

        [TestMethod]
        public void EksekvereAktivScan()
        {
            var aktivScanId = StarteAktivScan();
            CheckActiveScanProgress(aktivScanId);
        }

        [ClassCleanup]
        public static void RyddeOppOgGenerereRapport()
        {
            _zapClient.Dispose();

            var reportFilename = $"{DateTime.Now:dd-MMM-yyyy-hh-mm-ss}_OWASP_ZAP_Report";
            GenerereXmlRapport(reportFilename);
            GenerereHtmlRapport(reportFilename);
            GenerereMarkdownRapport(reportFilename);
        }


        private string StarteSpidering()
        {
            _response = _zapClient.spider.scan(ZapApiKey, TargetUrl, "", "", "", "");
            return ((ApiResponseElement)_response).Value;
        }

        private static void SjekkeSpiderUtvikling(string spideringId)
        {
            while (true)
            {
                Thread.Sleep(10000);
                var progress = int.Parse(((ApiResponseElement)_zapClient.spider.status(spideringId)).Value);
                if (progress >= 100)
                {
                    break;
                }
            }

            Thread.Sleep(5000);
        }

        private string StarteAktivScan()
        {
            _response = _zapClient.ascan.scan(ZapApiKey, TargetUrl, "", "", "", "", "", "");
            return ((ApiResponseElement)_response).Value;
        }

        private static void CheckActiveScanProgress(string aktivScanId)
        {
            while (true)
            {
                Thread.Sleep(10000);
                var progress = int.Parse(((ApiResponseElement)_zapClient.ascan.status(aktivScanId)).Value);

                if (progress >= 100)
                {
                    break;
                }
            }

            Thread.Sleep(5000);
        }

        private static void GenerereXmlRapport(string filnavn)
        {
            var fileName = $"{filnavn}.xml";
            File.WriteAllBytes(fileName, _zapClient.core.xmlreport(ZapApiKey));
        }

        private static void GenerereHtmlRapport(string filnavn)
        {
            var fileName = $"{filnavn}.html";
            File.WriteAllBytes(fileName, _zapClient.core.htmlreport(ZapApiKey));
        }

        private static void GenerereMarkdownRapport(string filnavn)
        {
            var fila = $"{filnavn}.md";
            File.WriteAllBytes(fila, _zapClient.core.mdreport(ZapApiKey));
        }
    }
}
