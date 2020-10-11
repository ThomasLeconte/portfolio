package thomas_leconte.cvwebsite.web.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import thomas_leconte.cvwebsite.web.dao.ContactDAO;
import thomas_leconte.cvwebsite.web.models.Contact;

import java.util.List;

@RestController
public class ContactController {

    @Autowired
    ContactDAO contactDAO;

    @GetMapping(value="/contacts")
    public List<Contact> getAllContacts(){
        return contactDAO.findAll();
    }

    @GetMapping(value="/contacts/{id}")
    public Contact getContactById(@PathVariable int id){
        return contactDAO.findById(id);
    }

    //ajouter un produit
    @CrossOrigin(origins = "http://localhost:8080") //Permet d'autoriser le cross origin avec cette URL
    @PostMapping(value = "/contacts")
    public Contact saveContact(@RequestBody Contact contact) {
        return contactDAO.save(contact);
    }

}
