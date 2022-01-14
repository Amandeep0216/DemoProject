/* package deal.bazaar.dealsbazzar.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import deal.bazaar.dealsbazzar.models.Category;
import deal.bazaar.dealsbazzar.models.ResponseData;
import deal.bazaar.dealsbazzar.services.CategoryService;

@RestController
@RequestMapping
public class AdminController {
   
    @Autowired
    private CategoryService categoryService;

    @PostMapping("/save")
    public ResponseData saveCategory(@RequestBody Category category)
    {
        Category newCategory = categoryService.saveCategory(category);
        if(newCategory==null)
			return new ResponseData(400, null, "data not added");
        else
			return new ResponseData(200, newCategory, "success");
    }
}
 */