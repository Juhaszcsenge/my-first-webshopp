import { Card } from "react-bootstrap"
import { formatCurrency } from '../utilities/formatCurrency';


type StoreItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}


export function StoreItem ({id, name, price, imgUrl}:
    StoreItemProps) {
        return <Card>
            <Card.Img
            variant="top"  
            src={imgUrl} height="200px" 
            style={{objectFit: "cover"}}
            />
            <Card.Body className="d-felx felx-column">
              <Card.Title className="d-felx justify-content-between 
              align-items-baseline mb-4">
                <span className="fs-2">{name}</span>
                <span className="ms-2 text-muted">{formatCurrency(price)}</span>
              </Card.Title>  
            </Card.Body>
        </Card>
    }