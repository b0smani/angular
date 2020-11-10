import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle = 'Product Detail';
  product: IProduct;
  errorMessage: string;

  constructor(private route: ActivatedRoute, private router: Router, private productsService: ProductService) { }

  onBack(): void {
    this.router.navigate(['/products']);
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    // this.product = {
    //   productId: 1,
    //   productName: 'Ivo Rake',
    //   productCode: 'GDN-0011',
    //   releaseDate: 'March 19, 2019',
    //   description: 'Leaf rake with 48-inch wooden handle.',
    //   price: 19.95,
    //   starRating: 3.2,
    //   imageUrl: 'assets/images/leaf_rake.png'
    // };

    this.productsService.getProducts().subscribe({
      next: products => {
        this.product = products.filter(p => p.productId === id)[0];
      },
      error: err => this.errorMessage = err
    });

  }

}
