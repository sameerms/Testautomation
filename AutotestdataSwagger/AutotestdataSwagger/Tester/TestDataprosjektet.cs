using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutotestdataSwagger.Byggere;
using HodorCommon.Models.Common;
using NUnit.Framework;
using TestdataApi;

namespace AutotestdataSwagger.Tester
{
    [TestFixture]
    public class TestDataprosjektet : PregBygger
    {
        [Test]
        public void h_FåNavnPåEnPersonFraPreg()
        {
            var result = GetPersonpregWithName();
            var person = new Dictionary<string, string> { { result.Result.PregName, result.Result.Nin } };
            Debug.WriteLine("keys :" +person.Keys);
            Debug.WriteLine("values :" + person.Values);
            Debug.WriteLine("halla");
        }
        [Test]
        public void i_FåHundrePersonenesNinFraPreg()
        {
            var result =GetPersonerIpregWithNin();
            var person = result.Result.GetEnumerator();
         
            Debug.WriteLine("keys :" + person);
            using (var file =
                new System.IO.StreamWriter(@"C:\testdata\nins.txt"))
            {
                while (person.MoveNext())
                {
                object personnin = person.Current;
                file.WriteLine(personnin);
                }

            }
            Debug.WriteLine("halla");
        }
    }
}