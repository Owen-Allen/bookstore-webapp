-- CreateTable
CREATE TABLE "author" (
    "author_id" VARCHAR(36) NOT NULL,
    "name" VARCHAR(100),

    CONSTRAINT "author_pkey" PRIMARY KEY ("author_id")
);

-- CreateTable
CREATE TABLE "book" (
    "isbn" VARCHAR(17) NOT NULL,
    "title" VARCHAR(100),
    "author" VARCHAR(100),
    "genre" VARCHAR(100),
    "price" DECIMAL(10,2),
    "stock" INTEGER,
    "num_pages" INTEGER,
    "pub_cut" DECIMAL(4,2),

    CONSTRAINT "book_pkey" PRIMARY KEY ("isbn")
);

-- CreateTable
CREATE TABLE "order_object" (
    "order_id" VARCHAR(10) NOT NULL,
    "isbn" VARCHAR(17) NOT NULL,
    "quantity" INTEGER DEFAULT 0,

    CONSTRAINT "order_object_pkey" PRIMARY KEY ("order_id","isbn")
);

-- CreateTable
CREATE TABLE "published" (
    "isbn" VARCHAR(17) NOT NULL,
    "publisher_id" VARCHAR(36) NOT NULL,

    CONSTRAINT "published_pkey" PRIMARY KEY ("isbn","publisher_id")
);

-- CreateTable
CREATE TABLE "publisher" (
    "publisher_id" VARCHAR(36) NOT NULL,
    "name" VARCHAR(100),
    "bank_account" DECIMAL(15,2) DEFAULT 0,

    CONSTRAINT "publisher_pkey" PRIMARY KEY ("publisher_id")
);

-- CreateTable
CREATE TABLE "user_account" (
    "user_id" VARCHAR(10) NOT NULL,
    "name" VARCHAR(100),
    "isadmin" BOOLEAN DEFAULT false,
    "shipping_house_number" VARCHAR(8),
    "shipping_street" VARCHAR(50),
    "shipping_city" VARCHAR(50),
    "shipping_province" VARCHAR(50),
    "shipping_postal_code" VARCHAR(6),
    "billing_house_number" VARCHAR(8),
    "billing_street" VARCHAR(50),
    "billing_city" VARCHAR(50),
    "billing_province" VARCHAR(50),
    "billing_postal_code" VARCHAR(6),

    CONSTRAINT "user_account_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "user_order" (
    "user_id" VARCHAR(10) NOT NULL,
    "order_id" VARCHAR(10) NOT NULL,
    "order_date" DATE,
    "order_house_number" VARCHAR(8),
    "order_street" VARCHAR(50),
    "order_city" VARCHAR(50),
    "order_province" VARCHAR(50),
    "order_postal_code" VARCHAR(6),
    "billing_house_number" VARCHAR(8),
    "billing_street" VARCHAR(50),
    "billing_city" VARCHAR(50),
    "billing_province" VARCHAR(50),
    "billing_postal_code" VARCHAR(6),
    "shipping_house_number" VARCHAR(8),
    "shipping_street" VARCHAR(50),
    "shipping_city" VARCHAR(50),
    "shipping_province" VARCHAR(50),
    "shipping_postal_code" VARCHAR(6),

    CONSTRAINT "user_order_pkey" PRIMARY KEY ("order_id")
);

-- CreateTable
CREATE TABLE "wrote" (
    "isbn" VARCHAR(17) NOT NULL,
    "author_id" VARCHAR(36) NOT NULL,

    CONSTRAINT "wrote_pkey" PRIMARY KEY ("isbn","author_id")
);

-- AddForeignKey
ALTER TABLE "order_object" ADD CONSTRAINT "order_object_isbn_fkey" FOREIGN KEY ("isbn") REFERENCES "book"("isbn") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "order_object" ADD CONSTRAINT "order_object_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "user_order"("order_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "published" ADD CONSTRAINT "published_isbn_fkey" FOREIGN KEY ("isbn") REFERENCES "book"("isbn") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "published" ADD CONSTRAINT "published_publisher_id_fkey" FOREIGN KEY ("publisher_id") REFERENCES "publisher"("publisher_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_order" ADD CONSTRAINT "user_order_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_account"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "wrote" ADD CONSTRAINT "wrote_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "author"("author_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "wrote" ADD CONSTRAINT "wrote_isbn_fkey" FOREIGN KEY ("isbn") REFERENCES "book"("isbn") ON DELETE CASCADE ON UPDATE NO ACTION;
