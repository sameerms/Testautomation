using System;
using System.Net;

namespace TestdataForApi.Httpsettings
{
    // Decompiled with JetBrains decompiler
    // Type: Hdir.Core.Web.Exceptions.HdirHttpException
    // Assembly: Hdir.Core.Web, Version=1.0.6612.20084, Culture=neutral, PublicKeyToken=null
    // MVID: 82B558AE-2A15-444C-A1EB-0E150AC811AC
    // Assembly location: C:\Users\admssawa\AppData\Local\Temp\2\Tehahem\58a0591664\lib\net461\Hdir.Core.Web.dll

    [Serializable]
        public class HdirHttpException : Exception
        {
            public HdirHttpException(string message, string url, HttpStatusCode status, string content)
                : base(message, (Exception)null)
            {
                this.EksternAdresse = url;
                this.StatusCode = status;
                this.Content = content;
            }

            public string EksternAdresse { get; }

            public HttpStatusCode StatusCode { get; }

            private string Content { get; }

            public override string ToString()
            {
                return string.Format("{0} fra {1}. {2}", (object)this.StatusCode, (object)this.EksternAdresse, (object)this.Content);
            }
        }
    }

