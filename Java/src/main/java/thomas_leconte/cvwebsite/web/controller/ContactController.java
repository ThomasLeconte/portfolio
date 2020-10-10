package thomas_leconte.cvwebsite.web.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import thomas_leconte.cvwebsite.web.dao.ContactDAO;
import thomas_leconte.cvwebsite.web.models.Contact;

import javax.validation.Valid;
import java.lang.reflect.Array;
import java.util.ArrayList;

@RestController
public class ContactController {

    @Autowired
    ContactDAO contactDAO;

    @GetMapping(value="/contacts/{id}")
    public Contact afficherUnContact(@PathVariable int id){
        return contactDAO.findById(id);
    }

    //ajouter un produit
    @PostMapping(value = "/contacts")
    public Contact ajouterProduit(@RequestBody Contact contact) {
        return contactDAO.save(contact);
    }

}
