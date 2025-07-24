// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getRewards } from '../features/rewards/rewardSlice';
// import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

// const RewardsMenu = () => {
//   const dispatch = useDispatch();
//   // Add a fallback object with empty arrays to prevent destructuring errors
//   const { rewards = [], isLoading = false } = useSelector(state => state.rewards || {});
//   const [isOpen, setIsOpen] = useState(false);
  
//   useEffect(() => {
//     dispatch(getRewards());
//   }, [dispatch]);
  
//   // Group rewards by type - with safety check
//   const groupedRewards = rewards && rewards.length ? rewards.reduce((groups, reward) => {
//     if (!groups[reward.type]) {
//       groups[reward.type] = [];
//     }
//     groups[reward.type].push(reward);
//     return groups;
//   }, {}) : {};
  
//   const toggleMenu = () => setIsOpen(!isOpen);
  
//   if (isLoading) {
//     return (
//       <div className="py-2 px-4">
//         <div className="flex items-center justify-between">
//           <span className="text-gray-500 dark:text-gray-400 text-sm">Rewards</span>
//           <div className="w-4 h-4 animate-pulse bg-gray-200 dark:bg-gray-700 rounded-full"></div>
//         </div>
//       </div>
//     );
//   }
  
//   if (!rewards || rewards.length === 0) {
//     return (
//       <div className="py-2 px-4">
//         <div className="flex items-center justify-between">
//           <span className="text-gray-500 dark:text-gray-400 text-sm">Rewards</span>
//           <span className="text-xs text-gray-400 dark:text-gray-500">0</span>
//         </div>
//       </div>
//     );
//   }
  
//   return (
//     <div className="border-t border-gray-200 dark:border-gray-700 pt-2 mt-2">
//       <button 
//         className="flex items-center justify-between w-full py-2 px-4 text-left hover:bg-gray-50 dark:hover:bg-gray-800 rounded transition-colors"
//         onClick={toggleMenu}
//       >
//         <span className="font-medium text-gray-700 dark:text-gray-300 flex items-center">
//           <span className="mr-2">🏆</span> My Rewards
//         </span>
//         <div className="flex items-center">
//           <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs font-medium px-2 py-0.5 rounded-full">
//             {rewards.length}
//           </span>
//           {isOpen ? (
//             <FaChevronUp className="ml-2 text-gray-400 dark:text-gray-500" size={12} />
//           ) : (
//             <FaChevronDown className="ml-2 text-gray-400 dark:text-gray-500" size={12} />
//           )}
//         </div>
//       </button>
      
//       {isOpen && Object.keys(groupedRewards).length > 0 && (
//         <div className="mt-1 space-y-1 pl-4 pr-2">
//           {Object.entries(groupedRewards).map(([type, typeRewards]) => (
//             <div key={type} className="mb-3">
//               <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1 pl-2">
//                 {type.charAt(0).toUpperCase() + type.slice(1)}s
//               </div>
              
//               <div className="space-y-1">
//                 {typeRewards.map((reward, index) => (
//                   <div 
//                     key={index}
//                     className="flex items-center py-1 px-2 text-sm text-gray-700 dark:text-gray-300 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
//                   >
//                     <span className="mr-2 text-lg">{reward.icon}</span>
//                     <div>
//                       <div className="text-xs font-medium">{reward.title}</div>
//                       <div className="text-xs text-gray-500 dark:text-gray-400">
//                         {new Date(reward.createdAt).toLocaleDateString()}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default RewardsMenu;





import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRewards } from '../features/rewards/rewardSlice';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const RewardsMenu = ({ isCollapsed, onClose }) => {
  const dispatch = useDispatch();
  // Add a fallback object with empty arrays to prevent destructuring errors
  const { rewards = [], isLoading = false } = useSelector(state => state.rewards || {});
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    dispatch(getRewards());
  }, [dispatch]);
  
  // Group rewards by type - with safety check
  const groupedRewards = rewards && rewards.length ? rewards.reduce((groups, reward) => {
    if (!groups[reward.type]) {
      groups[reward.type] = [];
    }
    groups[reward.type].push(reward);
    return groups;
  }, {}) : {};
  
  const toggleMenu = () => setIsOpen(!isOpen);

  // Header dropdown version
  if (onClose) {
    return (
      <div className="w-80 bg-white dark:bg-gray-800 rounded-md shadow-lg py-2 border border-gray-200 dark:border-gray-700">
        <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-sm font-medium text-gray-900 dark:text-white">My Rewards</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">{rewards.length} rewards earned</p>
        </div>
        
        {isLoading ? (
          <div className="px-4 py-8 text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Loading rewards...</p>
          </div>
        ) : rewards.length === 0 ? (
          <div className="px-4 py-8 text-center">
            <div className="text-4xl mb-2">🏆</div>
            <p className="text-sm text-gray-500 dark:text-gray-400">No rewards yet</p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Complete habits to earn rewards!</p>
          </div>
        ) : (
          <div className="max-h-64 overflow-y-auto">
            {Object.entries(groupedRewards).map(([type, typeRewards]) => (
              <div key={type} className="px-4 py-2">
                <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                  {type.charAt(0).toUpperCase() + type.slice(1)}s ({typeRewards.length})
                </div>
                
                <div className="space-y-2">
                  {typeRewards.slice(0, 3).map((reward, index) => (
                    <div 
                      key={index}
                      className="flex items-center p-2 text-sm text-gray-700 dark:text-gray-300 rounded hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <span className="mr-3 text-xl">{reward.icon}</span>
                      <div className="flex-1">
                        <div className="font-medium">{reward.title}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {new Date(reward.createdAt).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  ))}
                  {typeRewards.length > 3 && (
                    <div className="text-xs text-gray-500 dark:text-gray-400 text-center py-1">
                      +{typeRewards.length - 3} more {type}s
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
        
        {rewards.length > 0 && (
          <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-700">
            <button 
              className="w-full text-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              onClick={onClose}
            >
              View all rewards
            </button>
          </div>
        )}
      </div>
    );
  }
  
  // For collapsed sidebar - show compact version
  if (isCollapsed) {
    return (
      <div className="flex flex-col items-center justify-center py-2">
        <span className="text-lg">🏆</span>
        {rewards.length > 0 && (
          <span className="mt-1 bg-blue-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {rewards.length}
          </span>
        )}
      </div>
    );
  }
  
  if (isLoading) {
    return (
      <div className="py-2 px-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-500 dark:text-gray-400 text-sm">Rewards</span>
          <div className="w-4 h-4 animate-pulse bg-gray-200 dark:bg-gray-700 rounded-full"></div>
        </div>
      </div>
    );
  }
  
  if (!rewards || rewards.length === 0) {
    return (
      <div className="py-2 px-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-500 dark:text-gray-400 text-sm">Rewards</span>
          <span className="text-xs text-gray-400 dark:text-gray-500">0</span>
        </div>
      </div>
    );
  }
  
  return (
    <div className="border-t border-gray-200 dark:border-gray-700 pt-2 mt-2">
      <button 
        className="flex items-center justify-between w-full py-2 px-4 text-left hover:bg-gray-50 dark:hover:bg-gray-800 rounded transition-colors"
        onClick={toggleMenu}
      >
        <span className="font-medium text-gray-700 dark:text-gray-300 flex items-center">
          <span className="mr-2">🏆</span> My Rewards
        </span>
        <div className="flex items-center">
          <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs font-medium px-2 py-0.5 rounded-full">
            {rewards.length}
          </span>
          {isOpen ? (
            <FaChevronUp className="ml-2 text-gray-400 dark:text-gray-500" size={12} />
          ) : (
            <FaChevronDown className="ml-2 text-gray-400 dark:text-gray-500" size={12} />
          )}
        </div>
      </button>
      
      {isOpen && Object.keys(groupedRewards).length > 0 && (
        <div className="mt-1 space-y-1 pl-4 pr-2">
          {Object.entries(groupedRewards).map(([type, typeRewards]) => (
            <div key={type} className="mb-3">
              <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1 pl-2">
                {type.charAt(0).toUpperCase() + type.slice(1)}s
              </div>
              
              <div className="space-y-1">
                {typeRewards.map((reward, index) => (
                  <div 
                    key={index}
                    className="flex items-center py-1 px-2 text-sm text-gray-700 dark:text-gray-300 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <span className="mr-2 text-lg">{reward.icon}</span>
                    <div>
                      <div className="text-xs font-medium">{reward.title}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {new Date(reward.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RewardsMenu;