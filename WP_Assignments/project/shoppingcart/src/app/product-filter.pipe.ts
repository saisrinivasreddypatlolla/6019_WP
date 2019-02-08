import { PipeTransform, Pipe } from "@angular/core";
import { Product } from "./card";

@Pipe ({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
    transform(cardArray: Product[], searchTerm: string): Product[] {
        if (!cardArray || !searchTerm) {
            return cardArray;
        }

        return cardArray.filter(product =>
            product.productTitle.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);

    }
}