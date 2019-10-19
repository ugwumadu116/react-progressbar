import React, { useState, useEffect } from 'react';
import './App.css';
import Progress from './Progress';

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const listenToScrollEvent = () => {
    document.addEventListener("scroll", () => {
      requestAnimationFrame(() => {
        calculateScrollDistance();
      });
    });
  };

  const calculateScrollDistance = () => {
    const scrollTop = window.pageYOffset || document.body.scrollTop;
    const winHeight = window.innerHeight || document.body.clientHeight;
    const docHeight = getDocHeight();

    const totalDocScrollLength = docHeight - winHeight;
    const scrollPosition = Math.floor(scrollTop / totalDocScrollLength * 100)

    setScrollPosition(scrollPosition)
  }

  useEffect(() => {
    listenToScrollEvent();
  })

  const getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
  }

  return (
    <div className="App">
      <Progress scroll={scrollPosition + '%'} />
      <header></header>
      <div className="cards">

        <div className="card">
          <img className="card__image" src="https://source.unsplash.com/300x225/?beach" alt="beach" />
          <div className="card-title">

            <h2>
              Card title
          <small>Image from unsplash.com</small>
            </h2>
          </div>
          <div className="card-flap flap1">
            <div className="card-description">
              This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
      </div>
            <div className="card-flap flap2">
              <div className="card-actions">
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <img className="card__image" src="https://source.unsplash.com/300x225/?mountain" alt="mountain" />
          <div className="card-title">

            <h2>
              Card title
          <small>Image from unsplash.com</small>
            </h2>
          </div>
          <div className="card-flap flap1">
            <div className="card-description">
              This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
      </div>
            <div className="card-flap flap2">
              <div className="card-actions">
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <img className="card__image" src="https://source.unsplash.com/300x225/?field" alt="field" />
          <div className="card-title">

            <h2>
              Card title
          <small>Image from unsplash.com</small>
            </h2>
          </div>
          <div className="card-flap flap1">
            <div className="card-description">
              This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
      </div>
            <div className="card-flap flap2">
              <div className="card-actions">
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <img className="card__image" src="https://source.unsplash.com/300x225/?water" alt="water" />
          <div className="card-title">

            <h2>
              Card title
          <small>Image from unsplash.com</small>
            </h2>
          </div>
          <div className="card-flap flap1">
            <div className="card-description">
              This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
      </div>
            <div className="card-flap flap2">
              <div className="card-actions">
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <img className="card__image" src="https://source.unsplash.com/300x225/?river" alt="river" />
          <div className="card-title">

            <h2>
              Card title
          <small>Image from unsplash.com</small>
            </h2>
          </div>
          <div className="card-flap flap1">
            <div className="card-description">
              This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
      </div>
            <div className="card-flap flap2">
              <div className="card-actions">
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <img className="card__image" src="https://source.unsplash.com/300x225/?kite" alt="kite" />
          <div className="card-title">

            <h2>
              Card title
          <small>Image from unsplash.com</small>
            </h2>
          </div>
          <div className="card-flap flap1">
            <div className="card-description">
              This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
      </div>
            <div className="card-flap flap2">
              <div className="card-actions">
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <img className="card__image" src="https://source.unsplash.com/300x225/?underwater" alt="underwater" />
          <div className="card-title">

            <h2>
              Card title
          <small>Image from unsplash.com</small>
            </h2>
          </div>
          <div className="card-flap flap1">
            <div className="card-description">
              This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
      </div>
            <div className="card-flap flap2">
              <div className="card-actions">
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <img className="card__image" src="https://source.unsplash.com/300x225/?desert" alt="desert" />
          <div className="card-title">

            <h2>
              Card title
          <small>Image from unsplash.com</small>
            </h2>
          </div>
          <div className="card-flap flap1">
            <div className="card-description">
              This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
      </div>
            <div className="card-flap flap2">
              <div className="card-actions">
              </div>
            </div>
          </div>
        </div>

      </div>




    </div>
  );
}
 
export default App;

// render() {
//   return (
//     <div className="App">
//       <Progress scroll={this.state.scrollPosition + '%'} />
//       <header></header>
//       <div className="cards">

//         <div className="card">
//           <img className="card__image" src="https://source.unsplash.com/300x225/?beach" alt="beach" />
//           <div className="card-title">

//             <h2>
//               Card title
//           <small>Image from unsplash.com</small>
//             </h2>
//           </div>
//           <div className="card-flap flap1">
//             <div className="card-description">
//               This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
//       </div>
//             <div className="card-flap flap2">
//               <div className="card-actions">
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="card">
//           <img className="card__image" src="https://source.unsplash.com/300x225/?mountain" alt="mountain" />
//           <div className="card-title">

//             <h2>
//               Card title
//           <small>Image from unsplash.com</small>
//             </h2>
//           </div>
//           <div className="card-flap flap1">
//             <div className="card-description">
//               This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
//       </div>
//             <div className="card-flap flap2">
//               <div className="card-actions">
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="card">
//           <img className="card__image" src="https://source.unsplash.com/300x225/?field" alt="field" />
//           <div className="card-title">

//             <h2>
//               Card title
//           <small>Image from unsplash.com</small>
//             </h2>
//           </div>
//           <div className="card-flap flap1">
//             <div className="card-description">
//               This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
//       </div>
//             <div className="card-flap flap2">
//               <div className="card-actions">
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="card">
//           <img className="card__image" src="https://source.unsplash.com/300x225/?water" alt="water" />
//           <div className="card-title">

//             <h2>
//               Card title
//           <small>Image from unsplash.com</small>
//             </h2>
//           </div>
//           <div className="card-flap flap1">
//             <div className="card-description">
//               This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
//       </div>
//             <div className="card-flap flap2">
//               <div className="card-actions">
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="card">
//           <img className="card__image" src="https://source.unsplash.com/300x225/?river" alt="river" />
//           <div className="card-title">

//             <h2>
//               Card title
//           <small>Image from unsplash.com</small>
//             </h2>
//           </div>
//           <div className="card-flap flap1">
//             <div className="card-description">
//               This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
//       </div>
//             <div className="card-flap flap2">
//               <div className="card-actions">
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="card">
//           <img className="card__image" src="https://source.unsplash.com/300x225/?kite" alt="kite" />
//           <div className="card-title">

//             <h2>
//               Card title
//           <small>Image from unsplash.com</small>
//             </h2>
//           </div>
//           <div className="card-flap flap1">
//             <div className="card-description">
//               This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
//       </div>
//             <div className="card-flap flap2">
//               <div className="card-actions">
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="card">
//           <img className="card__image" src="https://source.unsplash.com/300x225/?underwater" alt="underwater" />
//           <div className="card-title">

//             <h2>
//               Card title
//           <small>Image from unsplash.com</small>
//             </h2>
//           </div>
//           <div className="card-flap flap1">
//             <div className="card-description">
//               This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
//       </div>
//             <div className="card-flap flap2">
//               <div className="card-actions">
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="card">
//           <img className="card__image" src="https://source.unsplash.com/300x225/?desert" alt="desert" />
//           <div className="card-title">

//             <h2>
//               Card title
//           <small>Image from unsplash.com</small>
//             </h2>
//           </div>
//           <div className="card-flap flap1">
//             <div className="card-description">
//               This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
//       </div>
//             <div className="card-flap flap2">
//               <div className="card-actions">
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>




//     </div>
//   );
// }

