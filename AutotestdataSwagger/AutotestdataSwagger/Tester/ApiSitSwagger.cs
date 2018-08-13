using System.IO;
using System.Threading;
using AutotestdataSwagger.Byggere;
using NUnit.Framework;

namespace AutotestdataSwagger.Tester

{
    [TestFixture]
    public class AutotestdataSwagger : SøkeBygger
    {
        private readonly string _jsonfila1= File.ReadAllText("C:/Testdata/LagEttVilkår.json");
        private readonly string _jsonfila2 = File.ReadAllText("C:/Testdata/vilkår_Avvisning.json");
        private readonly string _jsonfila3 = File.ReadAllText("C:/Testdata/vilkår_bosatt.json");
        private readonly string _jsonfila4 = File.ReadAllText("C:/Testdata/vilkår_land.json");
        private readonly string _jsonfila5 = File.ReadAllText("C:/Testdata/vilkår_pensjon.json");
        private readonly string _jsonfila6 = File.ReadAllText("C:/Testdata/vilkår_personkrets.json");

       [Test]
        public void a_Startside_Åpnet_SøkefeltetEksisterer()
        {
            Når.Jeg.NavigererTilElsaSitSwaggerGrensesnitt();
            Så.Skal.SøkefeltetVærePåSiden();
        }

        [Test]
        public void b_SkriverVilkårneiSitViaSwagger()
        {
            Gitt.At.NavigererTilElsaSitSwaggerGrensesnitt();
            Når.Jeg.TrykkerPåpostVilkår();
            Så.Skal.DetSkrivesVilkåretInneTextareaAvVilkåret(_jsonfila1);
            Thread.Sleep(2000);
            Og.Så.Vi.TrykkerpåprøvutknappenVilkår();
           /* Og.Så.Responsekodevellyketforvilkår()*/;
            
            
        }
        [Test]
        public void c_SkriverVilkårneiSitViaSwagger()
        {
            Gitt.At.NavigererTilElsaSitSwaggerGrensesnitt();
            Når.Jeg.TrykkerPåpostVilkår();
            Så.Skal.DetSkrivesVilkåretInneTextareaAvVilkåret(_jsonfila2);
            Og.Så.Vi.TrykkerpåprøvutknappenVilkår();
           /* Og.Så.Responsekodevellyketforvilkår();*/


        }
        [Test]
        public void d_SkriverVilkårneiSitViaSwagger()
        {
            Gitt.At.NavigererTilElsaSitSwaggerGrensesnitt();
            Når.Jeg.TrykkerPåpostVilkår();
            Så.Skal.DetSkrivesVilkåretInneTextareaAvVilkåret(_jsonfila3);
            Og.Så.Vi.TrykkerpåprøvutknappenVilkår();
          /*  Og.Så.Responsekodevellyketforvilkår();*/


        }
        [Test]
        public void e_SkriverVilkårneiSitViaSwagger()
        {
            Gitt.At.NavigererTilElsaSitSwaggerGrensesnitt();
            Når.Jeg.TrykkerPåpostVilkår();
            Så.Skal.DetSkrivesVilkåretInneTextareaAvVilkåret(_jsonfila4);
            Og.Så.Vi.TrykkerpåprøvutknappenVilkår();
            /*Og.Så.Responsekodevellyketforvilkår();*/


        }
        [Test]
        public void f_SkriverVilkårneiSitViaSwagger()
        {
            Gitt.At.NavigererTilElsaSitSwaggerGrensesnitt();
            
            Når.Jeg.TrykkerPåpostVilkår();
            Så.Skal.DetSkrivesVilkåretInneTextareaAvVilkåret(_jsonfila5);
            Og.Så.Vi.TrykkerpåprøvutknappenVilkår();
            /*Og.Så.Responsekodevellyketforvilkår();*/


        }
        [Test]
        public void g_SkriverVilkårneiSitViaSwagger()
        {
            Gitt.At.NavigererTilElsaSitSwaggerGrensesnitt();
            Når.Jeg.TrykkerPåpostVilkår();
            Så.Skal.DetSkrivesVilkåretInneTextareaAvVilkåret(_jsonfila6);
            Og.Så.Vi.TrykkerpåprøvutknappenVilkår();
           /* Og.Så.Responsekodevellyketforvilkår();*/


        }
        /* [Test]
       public void h_SkriverSakstypeiSitviaSwagger()
        {
            Når.Jeg.NavigererTilElsaSitSwaggerGrensesnitt();
            Når.Jeg.TrykkerpåPostSakstype();
            Så.Skal.DetSkrivesSakstypejsonInneTextareaAvSakstype();
            Og.Så.Vi.Trykkerpåprøvutknappensakstype();
            Og.Så.Responsekodevellyketforsakstype();
            }*/
    }
}

