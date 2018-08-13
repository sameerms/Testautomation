using System;
using System.IO;
using System.Linq;
using AutotestdataSwagger.Pages;
using NUnit.Framework;
using OpenQA.Selenium.Chrome;
using AutotestdataSwagger.Ordliste;


namespace AutotestdataSwagger.Byggere
{
    public class SøkeBygger : FluentOrdliste<SøkeBygger>
    {
        protected ChromeDriver WebDriver;
        protected StartsidePage Startside;
       
        [SetUp]
        public void Oppsett()
        {
            WebDriver = new ChromeDriver();
            WebDriver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(5);
            Startside = new StartsidePage(WebDriver);
           /* KategoriResultatPage = new KategoriResultatPage(WebDriver);
            SøkeresultatPage = new SøkeresultatPage(WebDriver);*/
        }

        public void SøkefeltetVærePåSiden()
        {
            Assert.IsNotNull(Startside.SøkefeltEksisterer(), $"Fant ikke søkefelt på startsiden. \n{WebDriver.Url}");
        }

        public void NavigererTilElsaSitSwaggerGrensesnitt()
        {
            Startside.Hjem();
        }

        [TearDown]
        public void Opprydning()
        {
            WebDriver.Quit();
            Startside.Dispose();
        }

        public void TrykkerPåpostVilkår()
        {
            Startside.GårTilElsaSit();
        }

        public void DetSkrivesVilkåretInneTextareaAvVilkåret(string jsonfila)
        {

            /*var kategorier = File.ReadAllText("C:/Testdata/lagettvilkår.json");*/
            Startside.SkriverIVilkårtekstarea(jsonfila);

        }
        
        public void TrykkerpåprøvutknappenVilkår()
        {
            Startside.KlikkpåprøveutKnappVilkår();

        }
        public void Trykkerpåprøvutknappensakstype()
        {
            Startside.KlikkpåprøveutKnappSakstype();

        }

        public void Responsekodevellyketforvilkår()
        {
           Startside.SjekkpåprøveutKnappResponsenforVilkår();
        }

        public void TrykkerpåPostSakstype()
        {
            Startside.KlikkpåPostsakstype();
        }

        public void DetSkrivesSakstypejsonInneTextareaAvSakstype()
        {
            Startside.SkriveriTekstareaavsakstype();
        }
        public void Responsekodevellyketforsakstype()
        {
            Startside.SjekkpåprøveutKnappResponsenforSakstype();
        }

    }
}
