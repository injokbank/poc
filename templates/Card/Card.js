import React, {
    cloneElement,
    createContext,
    useContext,
    useEffect,
    useState
  } from "react";


  const LIMIT = 10;
  
  const CardContext = createContext();
  
  const Card = ({ children }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const expand = () => {
      setIsCollapsed(!isCollapsed);
    };
  
    const collapse = () => {
      setIsCollapsed(!isCollapsed);
    };

    const value = { isCollapsed, expand, collapse };
    return (
      <CardContext.Provider value={value}>
        <div className="list-deal-group">{children}</div>
      </CardContext.Provider>
    );
  };
  
  const CardContent = ({ children }) => { 
    const { isCollapsed, expand } = useContext(CardContext);
    // useEffect(() => {
    //   const handleScroll = () => {
    //     // 스크롤 이벤트 핸들링
    //     expand();
    //     console.log('스크롤 중!');
    //   };
  
    //   window.addEventListener('scroll', handleScroll);
  
    //   // 컴포넌트가 언마운트되면 이벤트 리스너 제거
    //   return () => {
    //     console.log('스크롤 해제');
    //     window.removeEventListener('scroll', handleScroll);
    //   };
    // }, []); // 빈 배열은 컴포넌트가 처음 마운트될 때만 실행되도록 합니다.


    return children.map((child, index) => {
      if (isCollapsed) {
        while (LIMIT > index) {
          return <div key={index}>{child}</div>;
        }
      } else {
        return <div key={index}>{child}</div>;
      }
    });
  };
  
  const Expand = ({ children }) => {
    const { expand, isCollapsed } = useContext(CardContext);
    return isCollapsed && cloneElement(children, { onClick: expand });
    // return isCollapsed && children;
    // return isCollapsed && {children};
  };
  
  const Collapse = ({ children }) => {
    const { collapse, isCollapsed } = useContext(CardContext);
    return !isCollapsed && cloneElement(children, { onClick: collapse });
  };

  Card.CardContent = CardContent;
  Card.Expand = Expand;
  Card.Collapse = Collapse;
  
  export default Card;