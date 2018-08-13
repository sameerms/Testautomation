using System;
using System.Collections.Generic;
using System.Linq;
using System.Diagnostics;
using System.Text;
using System.Threading.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Support.PageObjects;
using OpenQA.Selenium.Support.UI;
using aTest.Infrastruktur;

namespace aTest.PageObjects
{
    public class PageObject
    {
        protected readonly IWebDriver WebDriver;
        protected WebDriverWait _wait;
        protected Stopwatch Stopwatch;

        public PageObject(IWebDriver webDriver)
        {
            WebDriver = webDriver;
            PageFactory.InitElements(WebDriver, this);
            _wait = new WebDriverWait(WebDriver, TimeSpan.FromSeconds(5));
            Stopwatch = new Stopwatch();
        }

        public void NavigerTilUrl(string url)
        {
            WebDriver.Navigate().GoToUrl($"{Config.Root}/{url}");
        }

        public void SkrivInnTekstInput(string elementName, string verdi)
        {
            var element = FinnElement(By.Name(elementName));
            element.SendKeys(verdi);
            element.SendKeys(Keys.Tab);
        }

        public void TrykkPåCheckbox(By by)
        {
            var element = FinnElement(by);
            element.Click();
        }

        public void SkrivInnDatoDatePicker(By by, DateTime date)
        {
            var dato = date.ToString("dd.MM.yyyy");
            var element = FinnElement(by);
            element.SendKeys(dato);
            element.SendKeys(Keys.Escape);
        }

        public void KlikkPåKnapp(By by)
        {
            var element = FinnElement(by);
            element.Click();
        }

        public void VerifiserKlasseFinnes(string klasse)
        {
            if (FinnElement(By.ClassName(klasse)) == null)
            {
                throw new Exception($"Fant ikke forventet klasse {klasse}");
            }
        }
        public void ElementerMedNavnFinnes(params string[] navn)
        {
            foreach (var element in navn)
            {
                if (FinnElement(By.Name(element)) == null)
                {
                    Assert.Fail($"Fant ikke element med navn {element}");
                }
            }
        }

        public string FinnTekstIElement(By by)
        {
            var element = FinnElement(by);

            return element.Text;
        }

        public IWebElement FinnElement(By by)
        {
            WaitUntilSpinnerDisappears();
            IWebElement element;
            try
            {
                element = WebDriver.FindElement(by);
            }
            catch (Exception)
            {
                _wait.Until(Seconds(3));
                element = WebDriver.FindElement(by);
            }

            return element;
        }

        public List<IWebElement> FinnElementer(By by)
        {
            WaitUntilSpinnerDisappears();
            IEnumerable<IWebElement> elements = WebDriver.FindElements(by);

            if (!elements.Any())
            {
                _wait.Until(Seconds(3));
                elements = WebDriver.FindElements(by);
            }

            return elements.ToList();
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

        public Func<IWebDriver, bool> Milliseconds(int milliseconds)
        {
            Stopwatch.Reset();
            return driver =>
            {
                Stopwatch.Start();
                while (Stopwatch.Elapsed.Milliseconds < milliseconds)
                {
                    return false;
                }
                Stopwatch.Stop();

                return true;
            };
        }

       

        private void WaitUntilSpinnerDisappears()
        {
            var loader = WebDriver.FindElements(By.ClassName("loader"));

            while (loader.Count > 0)
            {
                _wait.Until(Milliseconds(200));
                loader = WebDriver.FindElements(By.ClassName("loader"));
            }
        }

    }
}

