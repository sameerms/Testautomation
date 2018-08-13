using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using aTest.Base;
using aTest.PageObjects;

namespace aTest.Byggere
{
    public class StartsideBygger : TestBase<StartsideBygger>

    {
        private readonly StartsidePage _startsidePage;

        public StartsideBygger()
        {
            Setup();
            _startsidePage = new StartsidePage(WebDriver);

        }

        public void NavigerTilStartsiden()
        {
            _startsidePage.NavigerTil();
        }

        public void SkriverEpostAdr()
        {
            _startsidePage.SkriveUsername();

        }

        public void SkriverPassord()
        {
            _startsidePage.SkrivePassword();
        }

        public void KlikkerPåLoginButton()
        {
            _startsidePage.KlikkPåLoginbtn();
        }

        public void BliNavigertTilProfilSiden()
        {
            _startsidePage.Verifiserlokasjon();
        }

    }
}
