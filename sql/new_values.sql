delete from published;
delete from wrote;
delete from order_object;
delete from user_order;
delete from author;
delete from publisher;
delete from book;
delete from user_account;

                        -- ISBN,         title,                  genre,     price, stock,num pages, publisher cut 
insert into book values("9780061120084", "To Kill a Mockingbird", "Fiction", 12.99, 150, 336, 0.45);
insert into book values("9780451524935", "1984", "Fiction", 9.99, 200, 328, 0.4);
insert into book values("9780743273565", "The Great Gatsby", "Fiction", 10.99, 100, 180, 0.35);
insert into book values("9780141439518", "Pride and Prejudice", "Fiction", 8.99, 250, 432, 0.4);
insert into book values("9780316769488", "The Catcher in the Rye", "Fiction", 11.99, 180, 224, 0.5);
insert into book values("9780547928227", "The Hobbit", "Fantasy", 14.99, 120, 320, 0.4);
insert into book values("9780618640157", "The Lord of the Rings", "Fantasy", 29.99, 80, 1178, 0.35);
insert into book values("9780590353427", "Harry Potter and the Philosopher's Stone", "Fantasy", 12.99, 300, 352, 0.45);
insert into book values("9781840224317", "Jane Eyre", "Fiction", 9.99, 200, 532, 0.4);
insert into book values("9780064404990", "The Chronicles of Narnia", "Fantasy", 19.99, 150, 766, 0.35);
insert into book values("9781853260087", "Moby-Dick", "Fiction", 11.99, 120, 720, 0.4);
insert into book values("9780140268867", "The Odyssey", "Classics", 9.99, 180, 416, 0.4);
insert into book values("9780060850524", "Brave New World", "Science Fiction", 10.99, 200, 288, 0.35);
insert into book values("9780451526342", "Animal Farm", "Fiction", 8.99, 250, 144, 0.45);
insert into book values("9781451635621", "Gone with the Wind", "Fiction", 13.99, 100, 960, 0.4);
insert into book values("9780142437220", "The Divine Comedy", "Classics", 12.99, 150, 752, 0.35);
insert into book values("9780486280615", "The Adventures of Huckleberry Finn", "Fiction", 9.99, 200, 366, 0.4);
insert into book values("9780141439556", "Wuthering Heights", "Fiction", 8.99, 250, 416, 0.45);
insert into book values("9780486454115", "Crime and Punishment", "Fiction", 11.99, 180, 576, 0.4);
insert into book values("9780553210767", "The Count of Monte Cristo", "Fiction", 14.99, 120, 1276, 0.35);
insert into book values("9780486282114", "Frankenstein", "Fiction", 9.99, 200, 280, 0.4);
insert into book values("9780143039433", "The Grapes of Wrath", "Fiction", 10.99, 100, 464, 0.45);
insert into book values("9780486275574", "The Picture of Dorian Gray", "Fiction", 8.99, 250, 272, 0.4);
insert into book values("9780060974144", "One Hundred Years of Solitude", "Fiction", 12.99, 150, 417, 0.35);
insert into book values("9780486280554", "The Scarlet Letter", "Fiction", 9.99, 200, 238, 0.4);
insert into book values("9780199535569", "The Iliad", "Classics", 11.99, 180, 704, 0.4);
insert into book values("9780141181260", "Anna Karenina", "Fiction", 10.99, 100, 976, 0.35);
insert into book values("9780553212150", "The Brothers Karamazov", "Fiction", 14.99, 120, 796, 0.4);
insert into book values("9780140449146", "Don Quixote", "Classics", 9.99, 200, 992, 0.45);
insert into book values("9780061120077", "Lord of the Flies", "Fiction", 8.99, 250, 224, 0.4);
insert into book values("9780451526342", "Of Mice and Men", "Fiction", 8.99, 250, 112, 0.45);
insert into book values("9780142437800", "The Odyssey", "Classics", 12.99, 150, 541, 0.35);
insert into book values("9780141439808", "Great Expectations", "Fiction", 10.99, 100, 544, 0.4);
insert into book values("9780486415864", "Alice's Adventures in Wonderland", "Fiction", 9.99, 200, 176, 0.4);
insert into book values("9780143112336", "The Road", "Fiction", 11.99, 180, 304, 0.35);
insert into book values("9780140283334", "The Adventures of Tom Sawyer", "Fiction", 9.99, 200, 288, 0.4);
insert into book values("9780141182557", "The Trial", "Fiction", 8.99, 250, 224, 0.45);
insert into book values("9780486280554", "Sense and Sensibility", "Fiction", 9.99, 200, 384, 0.4);
insert into book values("9780141439495", "Les Misérables", "Fiction", 10.99, 100, 1232, 0.35);
insert into book values("9780140449276", "War and Peace", "Fiction", 14.99, 120, 1225, 0.4);
insert into book values("9780553212419", "The Picture of Dorian Gray", "Fiction", 9.99, 200, 304, 0.4);
insert into book values("9780141184896", "Mrs Dalloway", "Fiction", 8.99, 250, 224, 0.45);
insert into book values("9780061120626", "Wuthering Heights", "Fiction", 12.99, 150, 416, 0.4);
insert into book values("9780451525666", "Sense and Sensibility", "Fiction", 10.99, 100, 432, 0.35);
insert into book values("9780143105956", "The Secret Garden", "Fiction", 8.99, 250, 288, 0.4);
insert into book values("9780486426822", "The Three Musketeers", "Fiction", 9.99, 200, 704, 0.45);
insert into book values("9780553213102", "Dracula", "Fiction", 11.99, 180, 432, 0.4);
insert into book values("9780141187064", "The Wind-Up Bird Chronicle", "Fiction", 14.99, 120, 607, 0.35);
insert into book values("9780140439037", "Northanger Abbey", "Fiction", 9.99, 200, 256, 0.4);
insert into book values("9780143039433", "The Kite Runner", "Fiction", 12.99, 150, 371, 0.35);
insert into book values("9780451524935", "The Sun Also Rises", "Fiction", 10.99, 100, 251, 0.4);
insert into book values("9780743273565", "The Old Man and the Sea", "Fiction", 8.99, 250, 127, 0.45);
insert into book values("9780141439518", "The Bell Jar", "Fiction", 10.99, 100, 244, 0.4);
insert into book values("9780316769488", "The Alchemist", "Fiction", 12.99, 150, 197, 0.35);
insert into book values("9780547928227", "The Fault in Our Stars", "Fiction", 14.99, 120, 313, 0.4);
insert into book values("9780618640157", "The Giver", "Fiction", 9.99, 200, 208, 0.4);
insert into book values("9780590353427", "The Maze Runner", "Fiction", 10.99, 100, 375, 0.35);
insert into book values("9781840224317", "The Book Thief", "Fiction", 12.99, 150, 552, 0.4);
insert into book values("9780064404990", "The Hunger Games", "Fiction", 8.99, 250, 374, 0.45);
insert into book values("9781853260087", "Divergent", "Fiction", 10.99, 100, 487, 0.4);
insert into book values("9780140268867", "The Chronicles of Narnia", "Fiction", 9.99, 200, 767, 0.35);
insert into book values("9780060850524", "The Perks of Being a Wallflower", "Fiction", 11.99, 180, 213, 0.4);
insert into book values("9780451526342", "The Fault in Our Stars", "Fiction", 8.99, 250, 313, 0.4);
insert into book values("9781451635621", "The Help", "Fiction", 13.99, 100, 451, 0.35);
insert into book values("9780142437220", "The Fault in Our Stars", "Fiction", 12.99, 150, 313, 0.4);
insert into book values("9780486280615", "The Maze Runner", "Fiction", 9.99, 200, 375, 0.45);
insert into book values("9780141439556", "The Perks of Being a Wallflower", "Fiction", 10.99, 100, 213, 0.4);
insert into book values("9780486454115", "The Hobbit", "Fantasy", 11.99, 180, 320, 0.4);
insert into book values("9780553210767", "The Lord of the Rings", "Fantasy", 14.99, 120, 1178, 0.35);
insert into book values("9780486282114", "Harry Potter and the Sorcerer's Stone", "Fantasy", 12.99, 150, 352, 0.45);
insert into book values("9780061120084", "Harry Potter and the Chamber of Secrets", "Fantasy", 10.99, 100, 341, 0.4);
insert into book values("9780451524935", "Harry Potter and the Prisoner of Azkaban", "Fantasy", 9.99, 200, 435, 0.35);
insert into book values("9780743273565", "Harry Potter and the Goblet of Fire", "Fantasy", 10.99, 100, 734, 0.4);
insert into book values("9780141439518", "Harry Potter and the Order of the Phoenix", "Fantasy", 8.99, 250, 870, 0.45);
insert into book values("9780316769488", "Harry Potter and the Half-Blood Prince", "Fantasy", 11.99, 180, 652, 0.4);
insert into book values("9780547928227", "Harry Potter and the Deathly Hallows", "Fantasy", 14.99, 120, 607, 0.35);
insert into book values("9780618640157", "The Hobbit", "Fantasy", 9.99, 200, 320, 0.4);
insert into book values("9780590353427", "The Lord of the Rings", "Fantasy", 10.99, 100, 1178, 0.35);
insert into book values("9781840224317", "Harry Potter and the Philosopher's Stone", "Fantasy", 12.99, 150, 352, 0.45);
insert into book values("9780064404990", "Harry Potter and the Chamber of Secrets", "Fantasy", 8.99, 250, 341, 0.4);
insert into book values("9781853260087", "Harry Potter and the Prisoner of Azkaban", "Fantasy", 10.99, 100, 435, 0.35);
insert into book values("9780140268867", "Harry Potter and the Goblet of Fire", "Fantasy", 9.99, 200, 734, 0.4);
insert into book values("9780060850524", "Harry Potter and the Order of the Phoenix", "Fantasy", 11.99, 180, 870, 0.45);
insert into book values("9780451526342", "Harry Potter and the Half-Blood Prince", "Fantasy", 8.99, 250, 652, 0.4);
insert into book values("9781451635621", "Harry Potter and the Deathly Hallows", "Fantasy", 13.99, 100, 607, 0.35);
insert into book values("9780142437220", "The Hobbit", "Fantasy", 12.99, 150, 320, 0.4);
insert into book values("9780486280615", "The Lord of the Rings", "Fantasy", 9.99, 200, 1178, 0.35);
insert into book values("9780141439556", "Harry Potter and the Philosopher's Stone", "Fantasy", 10.99, 100, 352, 0.4);
insert into book values("9780486454115", "Harry Potter and the Chamber of Secrets", "Fantasy", 11.99, 180, 341, 0.45);
insert into book values("9780553210767", "Harry Potter and the Prisoner of Azkaban", "Fantasy", 14.99, 120, 435, 0.4);
insert into book values("9780486282114", "Harry Potter and the Goblet of Fire", "Fantasy", 12.99, 150, 734, 0.35);
insert into book values("9780061120084", "Harry Potter and the Order of the Phoenix", "Fantasy", 10.99, 100, 870, 0.4);
insert into book values("9780451524935", "Harry Potter and the Half-Blood Prince", "Fantasy", 9.99, 200, 652, 0.45);
insert into book values("9780743273565", "Harry Potter and the Deathly Hallows", "Fantasy", 10.99, 100, 607, 0.4);
insert into book values("9780141439518", "The Hobbit", "Fantasy", 8.99, 250, 320, 0.35);
insert into book values("9780316769488", "The Lord of the Rings", "Fantasy", 11.99, 180, 1178, 0.4);
insert into book values("9780547928227", "Harry Potter and the Philosopher's Stone", "Fantasy", 14.99, 120, 352, 0.35);
insert into book values("9780618640157", "Harry Potter and the Chamber of Secrets", "Fantasy", 9.99, 200, 341, 0.4);
insert into book values("9780590353427", "Harry Potter and the Prisoner of Azkaban", "Fantasy", 10.99, 100, 435, 0.45);
insert into book values("9781840224317", "Harry Potter and the Goblet of Fire", "Fantasy", 12.99, 150, 734, 0.4);



insert into user_account values("U0000001", "Eric", TRUE, "123", "Smith Street", "Ottawa", "ON", "K1C3XL", "123", "Smith Street", "Ottawa", "ON", "K1C3X6");
insert into user_account values("U0000002", "John", FALSE, "4323", "Bilson Street", "Montreal", "ON", "Q1B3X2", "4323", "Bilson Street", "Montreal", "ON", "Q1B3X2");
insert into user_account values("U0000003", "Steve", FALSE, "2315", "Lopsided Street", "Ajax", "ON", "P1L2X2", "2315", "Lopsided Street", "Ajax", "ON", "P1L2X2");
insert into user_account values("U0000004", "Jenny", FALSE, "12313", "Bronktonk Avenue", "Bronksonville", "ON", "R1T6Y0", "12313", "Bronktonk Avenue", "Bronksonville", "ON", "R1T6Y0");

-- create table user_order (user_id, order_id, date 
-- cur_house_number,  cur_street,  cur_city ,  cur_province ,  cur_postal_code
-- bil_house_number ,  bil_street,  bil_city ,  bil_province ,  bil_postal_code 
-- str_house_number,  str_street,  str_city,  str_province,  str_postal_code
-- insert into user_order values("U0000001", "00000010", "2021-11-26", "124", "Shipping Avenue", "Bracebridge", "QC", "W3R3T3", "123", "Smith Street", "Ottawa", "ON", "K1C3X6", "123", "Smith Street", "Ottawa", "ON", "K1C3X6");
-- insert into user_order values("U0000002", "00000040", "2021-11-25", "124", "Shipping Avenue", "Bracebridge", "QC", "W3R3T3", "4323", "Bilson Street", "Montreal", "ON", "Q1B3X2", "4323", "Bilson Street", "Montreal", "ON", "Q1B3X2");
-- insert into user_order values("U0000003", "00000020", "2021-11-22", "124", "Shipping Avenue", "Bracebridge", "QC", "W3R3T3", "2315", "Lopsided Street", "Ajax", "ON", "P1L2X2", "2315", "Lopsided Street", "Ajax", "ON", "P1L2X2");
-- insert into user_order values("U0000004", "00000030", "2021-11-23", "124", "Shipping Avenue", "Bracebridge", "QC", "W3R3T3", "12313", "Bronktonk Avenue", "Bronksonville", "ON", "R1T6Y0", "12313", "Bronktonk Avenue", "Bronksonville", "ON", "R1T6Y0");
-- insert into user_order values("U0000004", "00000050", "2021-11-28", "124", "Shipping Avenue", "Bracebridge", "QC", "W3R3T3", "12313", "Bronktonk Avenue", "Bronksonville", "ON", "R1T6Y0", "12313", "Bronktonk Avenue", "Bronksonville", "ON", "R1T6Y0");

-- author_id, name
insert into author values("e4ecc4c1-4007-4d24-8620-16446a229604", "Harper Lee");
insert into author values("69cdf101-4702-4f95-aae2-c56b13d1769b", "J.D. Salinger");
insert into author values("8b5874a7-9d08-4594-ac5f-7cdb2b5e0883", "Emily Brontë");
insert into author values("90f84fa3-635b-4360-ad60-f9163e3413b7", "Fyodor Dostoevsky");
insert into author values("4c2ca8f5-76e1-4c3c-85f4-2da706ad2ba8", "William Shakespeare");
insert into author values("cc68b71e-f4f6-4b47-813f-8293d251e4ca", "J.K. Rowling");
insert into author values("ef0eeb95-3292-4574-b26d-7fdc4d135606", "Charles Dickens");
insert into author values("d3093432-0597-4f3b-b3ce-cc48a12e11e6", "J.R.R. Tolkien");
insert into author values("a966d4e2-fab3-4f31-b569-f25ef0911cbd", "Jane Austen");
insert into author values("0d718a6a-65d8-467f-bb1f-6c3fadfb59e8", "Ray Bradbury");
insert into author values("70b251cd-ecd4-4bc1-b9de-dcc39b307e86", "F. Scott Fitzgerald");
insert into author values("ce036a1b-1460-456b-bb03-dbdc05d637f8", "Louisa May Alcott");
insert into author values("cb3b669c-b26e-4841-8932-3b78255b02eb", "C.S. Lewis");
insert into author values("90ebbd92-2c8c-4c7a-9fc9-af2aebfd9a48", "Charlotte Brontë");
insert into author values("66a4b5fa-710f-433e-8de4-4c561a3ae93c", "Leo Tolstoy");
insert into author values("3f3f04f6-f79d-4d2c-8223-5351729f0c0d", "George Orwell");
insert into author values("abb402cc-3b37-4b11-9b1f-c7cfe641b9e5", "William Golding");
insert into author values("e78d30e4-1fbb-429e-b96e-039295dd8d5d", "Bram Stoker");
insert into author values("cf63c007-f366-48b3-9f49-6fc239ffa298", "Oscar Wilde");
insert into author values("3d53f1ad-5925-4f28-b38e-030dbf837602", "Mark Twain");

-- ISBN, author_id
insert into wrote values("9780061120084", "e4ecc4c1-4007-4d24-8620-16446a229604");
insert into wrote values("9780451524935", "3f3f04f6-f79d-4d2c-8223-5351729f0c0d");
insert into wrote values("9780743273565", "70b251cd-ecd4-4bc1-b9de-dcc39b307e86");
insert into wrote values("9780141439518", "a966d4e2-fab3-4f31-b569-f25ef0911cbd");
insert into wrote values("9780316769488", "69cdf101-4702-4f95-aae2-c56b13d1769b");
insert into wrote values("9780547928227", "d3093432-0597-4f3b-b3ce-cc48a12e11e6");
insert into wrote values("9780618640157", "cc68b71e-f4f6-4b47-813f-8293d251e4ca");
insert into wrote values("9780590353427", "d3093432-0597-4f3b-b3ce-cc48a12e11e6");
insert into wrote values("9781840224317", "e78d30e4-1fbb-429e-b96e-039295dd8d5d");
insert into wrote values("9780064404990", "ce036a1b-1460-456b-bb03-dbdc05d637f8");
insert into wrote values("9781853260087", "8b5874a7-9d08-4594-ac5f-7cdb2b5e0883");
insert into wrote values("9780140268867", "ef0eeb95-3292-4574-b26d-7fdc4d135606");
insert into wrote values("9780060850524", "cb3b669c-b26e-4841-8932-3b78255b02eb");
insert into wrote values("9780451526342", "3f3f04f6-f79d-4d2c-8223-5351729f0c0d");
insert into wrote values("9781451635621", "0d718a6a-65d8-467f-bb1f-6c3fadfb59e8");
insert into wrote values("9780142437220", "a966d4e2-fab3-4f31-b569-f25ef0911cbd");
insert into wrote values("9780486280615", "4c2ca8f5-76e1-4c3c-85f4-2da706ad2ba8");
insert into wrote values("9780141439556", "90ebbd92-2c8c-4c7a-9fc9-af2aebfd9a48");
insert into wrote values("9780486454115", "90f84fa3-635b-4360-ad60-f9163e3413b7");
insert into wrote values("9780553210767", "3d53f1ad-5925-4f28-b38e-030dbf837602");
insert into wrote values("9780486282114", "4c2ca8f5-76e1-4c3c-85f4-2da706ad2ba8");
insert into wrote values("9780143039433", "a966d4e2-fab3-4f31-b569-f25ef0911cbd");
insert into wrote values("9780486275574", "66a4b5fa-710f-433e-8de4-4c561a3ae93c");
insert into wrote values("9780060974144", "e4ecc4c1-4007-4d24-8620-16446a229604");
insert into wrote values("9780486280554", "4c2ca8f5-76e1-4c3c-85f4-2da706ad2ba8");
insert into wrote values("9780199535569", "cf63c007-f366-48b3-9f49-6fc239ffa298");
insert into wrote values("9780141181260", "abb402cc-3b37-4b11-9b1f-c7cfe641b9e5");
insert into wrote values("9780553212150", "90f84fa3-635b-4360-ad60-f9163e3413b7");
insert into wrote values("9780140449146", "4c2ca8f5-76e1-4c3c-85f4-2da706ad2ba8");
insert into wrote values("9780061120077", "e4ecc4c1-4007-4d24-8620-16446a229604");
insert into wrote values("9780451526342", "3f3f04f6-f79d-4d2c-8223-5351729f0c0d");
insert into wrote values("9780142437800", "a966d4e2-fab3-4f31-b569-f25ef0911cbd");
insert into wrote values("9780141439808", "90ebbd92-2c8c-4c7a-9fc9-af2aebfd9a48");
insert into wrote values("9780486415864", "4c2ca8f5-76e1-4c3c-85f4-2da706ad2ba8");
insert into wrote values("9780143112336", "a966d4e2-fab3-4f31-b569-f25ef0911cbd");
insert into wrote values("9780140283334", "90f84fa3-635b-4360-ad60-f9163e3413b7");
insert into wrote values("9780141182557", "3f3f04f6-f79d-4d2c-8223-5351729f0c0d");
insert into wrote values("9780486280554", "4c2ca8f5-76e1-4c3c-85f4-2da706ad2ba8");
insert into wrote values("9780141439495", "90ebbd92-2c8c-4c7a-9fc9-af2aebfd9a48");
insert into wrote values("9780140449276", "4c2ca8f5-76e1-4c3c-85f4-2da706ad2ba8");
insert into wrote values("9780553212419", "3d53f1ad-5925-4f28-b38e-030dbf837602");
insert into wrote values("9780141184896", "abb402cc-3b37-4b11-9b1f-c7cfe641b9e5");
insert into wrote values("9780061120626", "e4ecc4c1-4007-4d24-8620-16446a229604");
insert into wrote values("9780451525666", "3f3f04f6-f79d-4d2c-8223-5351729f0c0d");
insert into wrote values("9780143105956", "a966d4e2-fab3-4f31-b569-f25ef0911cbd");
insert into wrote values("9780486426822", "90f84fa3-635b-4360-ad60-f9163e3413b7");
insert into wrote values("9780553213102", "3d53f1ad-5925-4f28-b38e-030dbf837602");
insert into wrote values("9780141187064", "3f3f04f6-f79d-4d2c-8223-5351729f0c0d");
insert into wrote values("9780140439037", "a966d4e2-fab3-4f31-b569-f25ef0911cbd");
insert into wrote values("9780143039433", "a966d4e2-fab3-4f31-b569-f25ef0911cbd");
insert into wrote values("9780451524935", "3f3f04f6-f79d-4d2c-8223-5351729f0c0d");
insert into wrote values("9780743273565", "70b251cd-ecd4-4bc1-b9de-dcc39b307e86");
insert into wrote values("9780141439518", "a966d4e2-fab3-4f31-b569-f25ef0911cbd");
insert into wrote values("9780316769488", "69cdf101-4702-4f95-aae2-c56b13d1769b");
insert into wrote values("9780547928227", "d3093432-0597-4f3b-b3ce-cc48a12e11e6");
insert into wrote values("9780618640157", "cc68b71e-f4f6-4b47-813f-8293d251e4ca");
insert into wrote values("9780590353427", "d3093432-0597-4f3b-b3ce-cc48a12e11e6");
insert into wrote values("9781840224317", "e78d30e4-1fbb-429e-b96e-039295dd8d5d");
insert into wrote values("9780064404990", "ce036a1b-1460-456b-bb03-dbdc05d637f8");
insert into wrote values("9781853260087", "8b5874a7-9d08-4594-ac5f-7cdb2b5e0883");
insert into wrote values("9780140268867", "ef0eeb95-3292-4574-b26d-7fdc4d135606");
insert into wrote values("9780060850524", "cb3b669c-b26e-4841-8932-3b78255b02eb");
insert into wrote values("9780451526342", "3f3f04f6-f79d-4d2c-8223-5351729f0c0d");
insert into wrote values("9781451635621", "0d718a6a-65d8-467f-bb1f-6c3fadfb59e8");
insert into wrote values("9780142437220", "a966d4e2-fab3-4f31-b569-f25ef0911cbd");
insert into wrote values("9780486280615", "4c2ca8f5-76e1-4c3c-85f4-2da706ad2ba8");
insert into wrote values("9780141439556", "90ebbd92-2c8c-4c7a-9fc9-af2aebfd9a48");
insert into wrote values("9780486454115", "90f84fa3-635b-4360-ad60-f9163e3413b7");
insert into wrote values("9780553210767", "3d53f1ad-5925-4f28-b38e-030dbf837602");
insert into wrote values("9780486282114", "4c2ca8f5-76e1-4c3c-85f4-2da706ad2ba8");
insert into wrote values("9780061120084", "e4ecc4c1-4007-4d24-8620-16446a229604");
insert into wrote values("9780451524935", "3f3f04f6-f79d-4d2c-8223-5351729f0c0d");
insert into wrote values("9780743273565", "70b251cd-ecd4-4bc1-b9de-dcc39b307e86");
insert into wrote values("9780141439518", "a966d4e2-fab3-4f31-b569-f25ef0911cbd");
insert into wrote values("9780316769488", "69cdf101-4702-4f95-aae2-c56b13d1769b");
insert into wrote values("9780547928227", "d3093432-0597-4f3b-b3ce-cc48a12e11e6");
insert into wrote values("9780618640157", "cc68b71e-f4f6-4b47-813f-8293d251e4ca");
insert into wrote values("9780590353427", "d3093432-0597-4f3b-b3ce-cc48a12e11e6");
insert into wrote values("9781840224317", "e78d30e4-1fbb-429e-b96e-039295dd8d5d");
insert into wrote values("9780064404990", "ce036a1b-1460-456b-bb03-dbdc05d637f8");
insert into wrote values("9781853260087", "8b5874a7-9d08-4594-ac5f-7cdb2b5e0883");
insert into wrote values("9780140268867", "ef0eeb95-3292-4574-b26d-7fdc4d135606");
insert into wrote values("9780060850524", "cb3b669c-b26e-4841-8932-3b78255b02eb");
insert into wrote values("9780451526342", "3f3f04f6-f79d-4d2c-8223-5351729f0c0d");
insert into wrote values("9781451635621", "0d718a6a-65d8-467f-bb1f-6c3fadfb59e8");
insert into wrote values("9780142437220", "a966d4e2-fab3-4f31-b569-f25ef0911cbd");
insert into wrote values("9780486280615", "4c2ca8f5-76e1-4c3c-85f4-2da706ad2ba8");
insert into wrote values("9780141439556", "90ebbd92-2c8c-4c7a-9fc9-af2aebfd9a48");
insert into wrote values("9780486454115", "90f84fa3-635b-4360-ad60-f9163e3413b7");
insert into wrote values("9780553210767", "3d53f1ad-5925-4f28-b38e-030dbf837602");
insert into wrote values("9780486282114", "4c2ca8f5-76e1-4c3c-85f4-2da706ad2ba8");
insert into wrote values("9780061120084", "e4ecc4c1-4007-4d24-8620-16446a229604");
insert into wrote values("9780451524935", "3f3f04f6-f79d-4d2c-8223-5351729f0c0d");
insert into wrote values("9780743273565", "70b251cd-ecd4-4bc1-b9de-dcc39b307e86");
insert into wrote values("9780141439518", "a966d4e2-fab3-4f31-b569-f25ef0911cbd");
insert into wrote values("9780316769488", "69cdf101-4702-4f95-aae2-c56b13d1769b");
insert into wrote values("9780547928227", "d3093432-0597-4f3b-b3ce-cc48a12e11e6");
insert into wrote values("9780618640157", "cc68b71e-f4f6-4b47-813f-8293d251e4ca");
insert into wrote values("9780590353427", "d3093432-0597-4f3b-b3ce-cc48a12e11e6");
insert into wrote values("9781840224317", "e78d30e4-1fbb-429e-b96e-039295dd8d5d");


                            -- id, name
insert into publisher values("90b856ff-c26b-4b2d-98b3-9a01cc3437fb", "Wordsworth Editions Ltd");
insert into publisher values("f6fe19b7-61f0-4e44-af8b-19ead27d4e08", "Bantam Classics");
insert into publisher values("06257405-49fa-42b1-a001-16be2f3b1167", "HarperCollins");
insert into publisher values("cb50abb1-9194-4450-b94e-f56e81bcfde6", "Delacorte Press");
insert into publisher values("1eae3869-66b5-4ff4-9d27-c89eefc8f0b6", "Penguin Books");
insert into publisher values("1746c3c3-7fe3-4f5c-83a5-5bdbb4af0be2", "Houghton Mifflin Harcourt");
insert into publisher values("23b4e10e-9a95-4d8d-b981-a49c2282c07a", "Oxford University Press");
insert into publisher values("cc9ec167-702d-4f7c-9479-d9a08705291b", "Scribner");
insert into publisher values("19349efc-42bf-48d6-a18e-20a607220f09", "Penguin Classics");
insert into publisher values("169211b2-1e36-42de-aaba-7e1794976aea", "Vintage Books");
insert into publisher values("691355b0-3e14-4133-a98f-7de06e550942", "Bantam");
insert into publisher values("db4279d7-7ff8-42d4-8a7f-70ffeb3e510f", "Dutton Books");
insert into publisher values("ea972545-b52b-49b9-abc5-e384a0be9b97", "Dover Publications");
insert into publisher values("be596a31-8f94-4986-b833-21600408aac7", "HMH Books for Young Readers");
insert into publisher values("5d73528b-5034-4d57-b07c-57470f3afe03", "Harper Perennial");
insert into publisher values("3d11749b-cb9f-4a65-ace2-f60ecd2f3315", "HarperOne");
insert into publisher values("d43065e7-92a6-4499-bec6-868df8a3e44d", "MTV Books");
insert into publisher values("d5e919d4-487c-43f7-89cb-5c0779f42fc2", "Scholastic");
insert into publisher values("56e474b6-6e68-4842-96cd-b95ff6c5c888", "Mariner Books");
insert into publisher values("2d43bd10-272b-4157-8830-215091939e62", "Scholastic Press");
insert into publisher values("526b80dd-9628-4332-9f7b-750b52816b5c", "Puffin Books");
insert into publisher values("bb0c95b0-b1e5-4b30-8391-7facb42500a4", "William Golding");
insert into publisher values("51392208-ccc8-4ae6-90eb-74ab230e4874", "Signet Classic");
insert into publisher values("b3d270ff-2588-485b-83bd-98096dc64f54", "Back Bay Books");
insert into publisher values("216bf021-5f0a-417c-ae45-137355ccd5f8", "Amy Einhorn Books/Putnam");
insert into publisher values("7f6c4c56-a394-4de7-820f-bfaf2871ef58", "Harper Perennial Modern Classics");
insert into publisher values("c8addb1b-9fc9-4352-985e-a7a501034cd0", "Bloomsbury Publishing PLC");

-- ISBN, publisher_id
-- Phineas and Ferb.... Hachette
-- gonkies, Hachette
-- grinkies, Penguin
-- Absurdly Inane, Annick Press
insert into published values("000000006", "p100101001");
insert into published values("000000004", "p100101001");
insert into published values("000000005", "p005500555");
insert into published values("000000003", "p888777666");

--order_id, isbn, quantity
insert into order_object values("00000010", "000000006",3); --Fiction
insert into order_object values("00000010", "000000004", 2); --Self-Help
insert into order_object values("00000020", "000000004", 12); --Self-help
insert into order_object values("00000030", "000000003",1); --History
insert into order_object values("00000040", "000000005", 4); --Self-Help
insert into order_object values("00000050", "000000002", 600); --Autobiography


