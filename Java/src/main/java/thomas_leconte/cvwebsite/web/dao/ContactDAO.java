package thomas_leconte.cvwebsite.web.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import thomas_leconte.cvwebsite.web.models.Contact;

import java.util.List;

@Repository
public interface ContactDAO extends JpaRepository<Contact, Integer> {
    public List<Contact> findAll();
    public Contact findById(int id);
    public Contact save(Contact contact);
}
