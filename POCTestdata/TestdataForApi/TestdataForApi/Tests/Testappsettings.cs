using System.Configuration;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace TestdataForApi.Tests
{
    [TestClass]
    public class Testappsettings
    {
        [TestMethod]
        public void VerifyAppDomainHasConfigurationSettings()
        {
            var value = ConfigurationManager.AppSettings["TestValue"];
            Assert.IsFalse(string.IsNullOrEmpty(value), "No App.Config found.");
        }

        [TestMethod]
        public void LagVilårne()
        {
            Vilkårtest.OpprettVilkår();
        }

    }
}