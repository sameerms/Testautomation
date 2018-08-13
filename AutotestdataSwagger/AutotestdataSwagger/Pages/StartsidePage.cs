using System;
using System.Collections.Generic;
using AutotestdataSwagger.Utvidelser;
using OpenQA.Selenium;
using AutotestdataSwagger.Konstanter;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Newtonsoft.Json;

namespace AutotestdataSwagger.Pages
{
    public class StartsidePage : PageObjectBase
    {
        private string _prøveutknappresponsenforVilkår;
        private string _prøveutknappresponsenforSakstype;
        private string _sakstype;
        private static readonly Random Getrandom = new Random();
        private static readonly object SyncLock = new object();
        public static int GetRandomNumber(int min, int max)
        {
            lock (SyncLock)
            { 
                return Getrandom.Next(min, max);
            }
        }


        public string LagejsonforSakstype()
        {


            var gq = new RootObject
            {
                tittel = "S1 for pensjonister",
                vilkaar = new List<Vilkaar>
                {
                    new Vilkaar {vilkaarId = _prøveutknappresponsenforVilkår, plassering = GetRandomNumber(1,20).ToString()},
                }
            };



            var jsonstrng = JsonConvert.SerializeObject(gq);
                return jsonstrng;
        }

    public StartsidePage(IWebDriver driver) : base(driver)
        {

        }

        public override string StartUrl => "http://elsa-apisit.utvikling.local/apidok/";

        public void GårTilElsaSit()
        {
            var søkefelt = Driver.FinnUniktElement(Konstantliste.PostVilkår);
            søkefelt?.Click();
        }

        public void SkriverIVilkårtekstarea(string tekst)
        {
            var textarea = Driver.FinnUniktElement(Konstantliste.TekstareaVilkår);
            
            
            textarea.SendKeys(tekst);
        }
        public bool SøkefeltEksisterer()
        {
            return Driver.FinnUniktElement(Konstantliste.PostVilkår) != null;
        }

        public void KlikkpåprøveutKnappVilkår()
        {
            var prøveutknappen = Driver.FinnElementen(Konstantliste.VilkårPrøveutknapp);
            prøveutknappen.Click();
        }
        public void SjekkpåprøveutKnappResponsenforVilkår()
        {
            var prøveutknappenresponse = Driver.FinnUniktElement(Konstantliste.VilkårPrøveutknappResponse);
            _prøveutknappresponsenforVilkår = prøveutknappenresponse.Text;
            _sakstype =LagejsonforSakstype();
            /*Assert.AreEqual("17", prøveutknappenresponse.Text, "Feil response vilkåret finnes allrede");*/


        }

        public void SkriveriTekstareaavsakstype()
        {
            var tekstarea = Driver.FinnUniktElement(Konstantliste.TekstareaSakstype);
            tekstarea.SendKeys(Keys.Tab);
            tekstarea.Clear();
            tekstarea.SendKeys(_sakstype);
        }

        public void KlikkpåPostsakstype()
        {
            var postfeltsakstype = Driver.FinnUniktElement(Konstantliste.PostSakstype);
            postfeltsakstype?.Click();
        }
        public void KlikkpåprøveutKnappSakstype()
        {
            var prøveutknappen = Driver.FinnUniktElement(Konstantliste.SakstypePrøveutknapp);
            prøveutknappen.Click();
        }
        public void SjekkpåprøveutKnappResponsenforSakstype()
        {
            var prøveutknappenresponse = Driver.FinnUniktElement(Konstantliste.SakstypePrøveutknappResponse);
            _prøveutknappresponsenforSakstype = prøveutknappenresponse.Text;
            
            Assert.AreEqual("17", prøveutknappenresponse.Text, "Feil response vilkåret finnes allrede");


        }
    }

}
