
using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.IE;
using OpenQA.Selenium.Chrome;
using System.Diagnostics;
using System.Net.Http;
using Hdir.Core.TestUtil.Base;


namespace aTest.Base
{
    [DeploymentItem("ChromeDriverServer.exe")]
    public class TestBase<T> : BaseSpråk<T> where T : BaseSpråk<T>
    {
        protected Stopwatch Stopwatch;
        protected static IWebDriver WebDriver;

        protected void Setup()
        {
            var options = new ChromeOptions
            {

            };
            //InternetExplorerOptions
           /* {
                IntroduceInstabilityByIgnoringProtectedModeSettings = true,
                EnableNativeEvents = true,
                IgnoreZoomLevel = true
            };*/

            WebDriver = new ChromeDriver(options);
            Stopwatch = new Stopwatch();
        }

        protected void Close()
        {
            WebDriver.Close();
        }

        protected static void Dispose()
        {
            if (WebDriver != null)
            {
                WebDriver.Quit();
                WebDriver.Dispose();
            }
            WebDriver = null;
        }


        protected HttpResponseMessage ApiPost<TModel>(string url, TModel model)
        {
            return ApiClient.Post(url, model);
        }

        public Func<IWebDriver, bool> Seconds(int seconds)
        {
            Stopwatch.Reset();
            return driver =>
            {
                Stopwatch.Start();
                while (Stopwatch.Elapsed.Seconds < seconds)
                {
                    return false;
                }
                Stopwatch.Stop();

                return true;
            };
        }
    }
}