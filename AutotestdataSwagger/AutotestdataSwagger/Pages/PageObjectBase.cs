
using System;
using OpenQA.Selenium;

namespace AutotestdataSwagger.Pages
{
    public abstract class PageObjectBase : IDisposable
    {
        protected readonly IWebDriver Driver;

        protected PageObjectBase(IWebDriver driver)
        {
            Driver = driver;
        }

        public abstract string StartUrl { get; }

        public bool ErPåSiden => Driver.Url.StartsWith(StartUrl);

        public virtual void Hjem()
        {
            Driver.Navigate().GoToUrl(StartUrl);
        }

        public void Dispose()
        {
            Driver?.Dispose();
            GC.SuppressFinalize(this);
        }
    }
}
