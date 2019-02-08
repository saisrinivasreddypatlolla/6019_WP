import { PipeTransform, Pipe } from "@angular/core";
import { CARDS } from "./mock-cards";
import { Product } from "./card";

@Pipe ({
    name: 'productFilter'
})
export class SearchPipe implements PipeTransform {
    transform(products: Product[], searchTerm: string): Product[] {
        if (!products || !searchTerm) {
            return products;
        }

        return products.filter(product =>
            product.productTitle.toLowerCase().includes(searchTerm.toLowerCase()));

    }
}
