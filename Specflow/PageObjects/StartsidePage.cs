using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
using OpenQA.Selenium.Support.PageObjects;

namespace aTest.PageObjects
{
    public class StartsidePage : PageObject
    {
        public StartsidePage(IWebDriver webDriver) : base(webDriver)
        {
        }
        public void NavigerTil()
        {
            NavigerTilUrl(String.Empty);
        }

        public void SkriveUsername()
        {
            //var elementer = FinnElement(By.Name("email"));

            // elementer.SendKeys("111111");
            SkrivInnTekstInput("email", "111111");


        }
        public void SkrivePassword()
        {
            //var elementer = FinnElement(By.Name("pass"));
            //elementer.SendKeys("2222222222");
            SkrivInnTekstInput("pass", "22222");
        }

        public void KlikkPåLoginbtn()
        {
            var elementer = FinnElement(By.Id("loginbutton"));
            elementer.Click();
        }

        internal void Verifiserlokasjon()
        {
            throw new NotImplementedException();
        }
    }
}