import React from 'react'
import {Modal} from "./index"
import Styled from "../style/styled"


export default function CardDisplay(props) {
    
    const dis = props.cardList
    
    return (
        <Styled.CardDisplay>
            {Object.keys(dis).length> 0 ? Object.values(dis).map((item, index)=>{
                        let typeDescription, addButton, deleteButton;

                        if(props.isAuth){
                            addButton = <Styled.CardButton onClick={(e)=>props.addMyCard(item,e)}>Add Card To Library</Styled.CardButton>
                        }

                        if(props.deleteCard){
                            deleteButton = <Styled.CardButton onClick={()=>props.deleteCard(item)}>Delete Card From Library</Styled.CardButton>
                        }

                        if(item["name"]==="No Cards Found"){
                            return <Styled.Card>
                                        <Styled.CardHeader key={index}>{item["name"]}</Styled.CardHeader>
                                        
                                    </Styled.Card>
                        }
                        else if(item.imageUrl){

                            if(item["types"][0]==="Creature"){

                                typeDescription = <><Styled.CardHeader2>Power {item["power"]}</Styled.CardHeader2><Styled.CardHeader2>Toughness {item["toughness"]}</Styled.CardHeader2></>
                                
                            }else if (item["types"][0]==="Planeswalker"){

                                typeDescription = <><Styled.CardHeader2>Loyalty {item["loyalty"]}</Styled.CardHeader2></>

                            }

                            return <Styled.Card>
                                    <Styled.CardHeader key={index}>{item["name"]}</Styled.CardHeader>
                                    <Styled.CardInfo>
                                    <Modal item={item}/>
                                    <Styled.CardInfoText>
                                    <Styled.CardHeader2>CMC {item["cmc"]}</Styled.CardHeader2>
                                    {typeDescription}
                                    <Styled.CardHeader2>{item["type"]}</Styled.CardHeader2>
                                    </Styled.CardInfoText>
                                    </Styled.CardInfo>
                                    <Styled.CardDescription>{item["text"]}</Styled.CardDescription>
                                    {addButton}
                                    {deleteButton}
                                    </Styled.Card>
                        }else{

                            if(item["types"][0]==="Creature"){

                                typeDescription = <><Styled.CardHeader2>Power {item["power"]}</Styled.CardHeader2><Styled.CardHeader2>Toughness {item["toughness"]}</Styled.CardHeader2></>

                            }else if (item["types"][0]==="Planeswalker"){

                                typeDescription = <><Styled.CardHeader2>Loyalty {item["loyalty"]}</Styled.CardHeader2></>

                            }
                            return <Styled.Card>

                            <Styled.CardHeader key={index}>{item["name"]}</Styled.CardHeader>
                            <Styled.CardInfo>
                            <Modal item={item}/>
                            <Styled.CardInfoText>
                            <Styled.CardHeader2>CMC {item["cmc"]}</Styled.CardHeader2>
                            {typeDescription}
                            <Styled.CardHeader2>{item["type"]}</Styled.CardHeader2>
                            </Styled.CardInfoText>
                            </Styled.CardInfo>
                            <Styled.CardDescription>{item["text"]}</Styled.CardDescription>
                            {addButton}
                            {deleteButton}
                            </Styled.Card>
                        }
                    }
        
            ): <Styled.CardEmpty>{props.view}</Styled.CardEmpty>}
        </Styled.CardDisplay>
    )
}
