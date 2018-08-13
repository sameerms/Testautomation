using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TestdataForApi.Constanter;
using TestdataForApi.TestOppsett.Infrastruktur;
using TestdataForApi.ViewModels;

namespace TestdataForApi.Tests
{
   public class Vilkårtest
    {
        public static VilkaarViewModel LagVilkaar() => new VilkaarViewModel
        {
            StoetteTekst = "Vilkåret for Sammy kommer igjen",
            Tittel = "Personkrets Sameer hva skjera? funker dette",
            AarsakerIkkeOppfylt = LagÅrsaker(),
            AarsakerMerInformasjon = LagÅrsaker(),
            AarsakerOppfylt = LagÅrsaker()
        };
        private static AarsakViewModel Aarsak(bool standard, int nr) => new AarsakViewModel
        {
            Tittel = $"Årsak {nr}, {TilfeldigTall()}",
            Standard = standard
        };

        private static List<AarsakViewModel> LagÅrsaker()
        {
            var aarsaker = new List<AarsakViewModel>();
            for (var i = 0; i < 3; i++)
            {
                aarsaker.Add(i == 0 ? Aarsak(true, i) : Aarsak(false, i));
            }
            return aarsaker;
        }
        private static VilkaarPlasseringViewModel LagVilkårPlassering(int vilkaarId) => new VilkaarPlasseringViewModel
        {
            VilkaarId = vilkaarId,
        };

        private static List<VilkaarPlasseringViewModel> LagVilkårPlassingsListe(int vilkårId)
        {
            return new List<VilkaarPlasseringViewModel> { LagVilkårPlassering(vilkårId) };
        }
        private static string TilfeldigTall()
        {
            var rand = new Random();
            return rand.Next(1, int.MaxValue).ToString();
        }

        public static int OpprettVilkår()
        {
            return ApiKlient.ApiPost<int>(ApiUrler.Vilkår, LagVilkaar());
        }
    }
}
