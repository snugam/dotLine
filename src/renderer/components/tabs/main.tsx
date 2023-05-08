// import React, { useState } from 'react';
// import GreenDots from './Tab1DrawDots';
// import Tab2Content from './Tab2Content';
// import Tab3Content from './Tab3Content';
// import Tab4Content from './Tab4Content';
// import TabContent from './TabContent';
// import { Tabs } from '@src/api/types';


// const Tabs: React.FC<Tabs> = ({ tab1Dots }) => {
//   const [activeTab, setActiveTab] = useState(0);

//   return (
//     <div>
//       <div>
//         <button onClick={() => setActiveTab(0)}>Dots</button>
//         <button onClick={() => setActiveTab(1)}>Tab 2</button>
//         <button onClick={() => setActiveTab(2)}>Tab 3</button>
//         <button onClick={() => setActiveTab(3)}>Tab 4</button>
//       </div>
//       <TabContent isActive={activeTab === 0}>
//       </TabContent>
//       <GreenDots tickRate={1000} />
//       <TabContent isActive={activeTab === 1}>
//         <Tab2Content />
//       </TabContent>
//       <TabContent isActive={activeTab === 2}>
//         <Tab3Content />
//       </TabContent>
//       <TabContent isActive={activeTab === 3}>
//         <Tab4Content />
//       </TabContent>
//     </div>
//   );
// };

// export default Tabs;