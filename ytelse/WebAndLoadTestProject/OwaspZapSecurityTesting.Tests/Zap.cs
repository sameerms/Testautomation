using System;
using System.Diagnostics;
using System.Net;
using System.Threading;

namespace OwaspZapSecurityTesting.Tests
{
    public static class Zap
    {
        public static void StartZapUi()
        {
            var zapProcessStartInfo =
                new ProcessStartInfo
                {
                    FileName = @"C:\Program Files\OWASP\Zed Attack Proxy\ZAP.exe",
                    WorkingDirectory = @"C:\Program Files\OWASP\Zed Attack Proxy"
                };

            Process.Start(zapProcessStartInfo);

            Sleep(50000);
            SjekkOmZapHarStartetViaPollingAvApiet(1);
        }

        public static void StartZapDaemon()
        {
             var zapProcessStartInfo =
                new ProcessStartInfo
                {
                    FileName = @"C:\Program Files (x86)\OWASP\Zed Attack Proxy\ZAP.exe",
                    WorkingDirectory = @"C:\Program Files (x86)\OWASP\Zed Attack Proxy",
                    Arguments = "-daemon -host 127.0.0.1 -port 7070"
                };

            Process.Start(zapProcessStartInfo);

            Sleep(120000);
            SjekkOmZapHarStartetViaPollingAvApiet(1);
        }

        private static void Sleep(int sleepTime)
        {
           Thread.Sleep(sleepTime);
        }

        public static void SjekkOmZapHarStartetViaPollingAvApiet(int venteminutter)
        {
            var webClient = new WebClient();
            var watch = new Stopwatch();
            watch.Start();
            var millisecondsToWait = venteminutter * 60 * 1000;
            const string zapUrlToDownload = "http://localhost:8090";

            while (millisecondsToWait > watch.ElapsedMilliseconds)
            {
                try
                {
                    webClient.DownloadString(zapUrlToDownload);
                    return;
                }
                catch (WebException)
                {
                  Thread.Sleep(2000);
                }
            }

            throw new Exception(
                $"Ventet for {venteminutter} minuter, imidlertidig kunne ikke nå APIet , derfor feiler ved validering av ZAP oppstart");
        }
    }
}

