using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutotestdataSwagger.Ordliste;
using HodorCommon.Models.Common;
using TestdataApi;

namespace AutotestdataSwagger.Byggere
{
    public class PregBygger : FluentOrdliste<PregBygger>
    {
        private const string Apikey = "504E912978829CAF4A8FFA12E7AFF978";

        public async Task<RegisterPersonModel> GetPersonpregWithName()
        {
            var client = new TestdataPersonClient(Apikey, Environments.Test01);
            var filter = new PersonSearchFilter
            {
                Registreringskode = {Død = false},
                Registertilhørighet = {EriPREG = true}
            };
            var result = await client.GetPerson(
                filter);
            return result;
            
        }
        public async Task<IEnumerable<string>> GetPersonerIpregWithNin()
        {
            var client = new TestdataPersonClient(Apikey, Environments.Test01);
            var filter = new PersonSearchFilter
            {
                Registreringskode = { Død = false },
                Registertilhørighet = { EriPREG = true }
            };
            var result = await client.GetListOfNins(filter, 100);
              
            return result;

        }

    }
}
