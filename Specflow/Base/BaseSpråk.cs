using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace aTest.Base
{
  

    public abstract class BaseSpråk<T> where T : BaseSpråk<T>
    {
        public T At => (T)this;

        public T Når => (T)this;

        public T Jeg => (T)this;

        public T Så => (T)this;

        public T Og => (T)this;

        public T Gitt => (T)this;

        public T Det => (T)this;

        public T Har => (T)this;

        public T Velger => (T)this;

        public T Skal => (T)this;
    }
}