import React from 'react'
import FamilyTreeCss from './familyTree.module.css'
import Tree from 'react-d3-tree';
import orgChartJson from "./treeData/data.json";
import { useCenteredTree } from "./centeredTree";
import componentProfilePic from "../../../assets/lowerseconddivprofilepic.png"





const renderForeignObjectNode = ({
  nodeDatum,
  toggleNode,
  foreignObjectProps,
  classes

}) => (
  <>
    {/* `foreignObject` requires width & height to be explicitly set. */}
    <foreignObject {...foreignObjectProps}>

      <button className={FamilyTreeCss.mainButton} onClick={toggleNode} >
      <div className={FamilyTreeCss.componentMain}>
                    <div className={FamilyTreeCss.componentMainInner}>
                        <div className={FamilyTreeCss.componentPicture}>
                            <img src={componentProfilePic} />
                        </div>
                        <div className={FamilyTreeCss.componentInfo}>
                            <h6>{nodeDatum.name}</h6>
                            <p>{nodeDatum.attributes.jobPosition}</p>
                        </div>
                    </div>
                    <div className={FamilyTreeCss.componentMainLowerInner}>

                        <div className={FamilyTreeCss.firstLowerDiv}>
                            <h6>
                                Email:
                            </h6>
                            <label>
                            {nodeDatum.attributes.email}
                            </label>
                        </div>
                        <div className={FamilyTreeCss.secondLowerDiv}>
                            <div className={FamilyTreeCss.secondLowerDiv1}>
                                <h6>
                                    CNIC No:
                                </h6>
                                <label>
                                {nodeDatum.attributes.cnicNo}
                                </label>
                            </div>
                            <div className={FamilyTreeCss.secondLowerDiv2}>
                                <h6>
                                    CNIC Expiry:
                                </h6>
                                <label>
                                {nodeDatum.attributes.cnicExpire}
                                </label>
                            </div>
                        </div>
                        <div className={FamilyTreeCss.secondLowerDiv}>
                            <div className={FamilyTreeCss.secondLowerDiv1}>
                                <h6>
                                    DOB:
                                </h6>
                                <label>
                                {nodeDatum.attributes.dateOfBirth}
                                </label>
                            </div>
                            <div className={FamilyTreeCss.secondLowerDiv2}>
                                <h6>
                                    Date Of Joining:
                                </h6>
                                <label>
                                {nodeDatum.attributes.dateOfJoining}
                                </label>
                            </div>
                        </div>
                        <div className={FamilyTreeCss.secondLowerDiv}>
                            <div className={FamilyTreeCss.secondLowerDiv1}>
                                <h6>
                                    Martial Status:
                                </h6>
                                <label>
                                {nodeDatum.attributes.martialStatus}
                                </label>
                            </div>
                            <div className={FamilyTreeCss.secondLowerDiv2}>
                                <h6>
                                    Childrens:
                                </h6>
                                <label>
                                {nodeDatum.attributes.childrens}
                                </label>
                            </div>
                        </div>

                    </div>
                </div>
        {/*
        <div className={FamilyTreeCss.name}>{nodeDatum.name}</div>
        <div>{nodeDatum.attributes.jobPosition}</div>
        <div>Email: {nodeDatum.attributes.email} </div>
        <div>CnicNo: {nodeDatum.attributes.cnicNo} </div>
        <div>Cnic Expiry: {nodeDatum.attributes.cnicExpire} </div>
        <div>dob: {nodeDatum.attributes.dateOfBirth} </div>
        <div>date of joining: {nodeDatum.attributes.dateOfJoining} </div>
        <div>martial status: {nodeDatum.attributes.martialStatus} </div>
        <div>childrens: {nodeDatum.attributes.childrens} </div>*/}
      </button>
    
    </foreignObject>
  </>
);

const FamilyTree = () => {


  const [translate, containerRef] = useCenteredTree();
  const nodeSize = { x: 400, y: 450 };
  const separation = { siblings: 1, nonSiblings: 2 };
  const foreignObjectProps = { width: nodeSize.x, height: nodeSize.y, x: -125 };

  return (
    <>
      <div id="treeWrapper" style={{ width: '100%', height: '30em' }}>
        <Tree data={orgChartJson}
          translate={translate}
          nodeSize={nodeSize}
          separation={separation}
          transitionDuration="1000"
          pathFunc="step"
          rootNodeClassName="node__root"
          branchNodeClassName="node__branch"
          leafNodeClassName="node__leaf"
          renderCustomNodeElement={(rd3tProps) =>
            renderForeignObjectNode({ ...rd3tProps, foreignObjectProps })
          }
          orientation="vertical" />
      </div>
    </>
  )
}

export default FamilyTree