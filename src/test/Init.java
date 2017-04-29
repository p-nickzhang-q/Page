// Copyright (c) 2003-2016, One Network Enterprises, Inc. All rights reserved.

package test;


import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;

import com.mongodb.BasicDBObject;
import com.mongodb.DBCollection;

import dao.DBCollectionFactory;

/**
 * TODO complete the class documentation
 *
 */
public class Init {

  static DBCollection pageConllection;
  static DBCollection moduleConllection;
  static DBCollection dataConllection;

  @BeforeClass
  public static void init() {
    pageConllection = DBCollectionFactory.getPageDBCollection();
    moduleConllection = DBCollectionFactory.getModulecollection();
    dataConllection = DBCollectionFactory.getDataDBCollection();
  }

  @Test
  public void testAddPage() {
    BasicDBObject testpage = new BasicDBObject();
    pageConllection.insert(testpage);
  }

  @Test
  public void testAddModule() {
    BasicDBObject testModule = new BasicDBObject();
    moduleConllection.insert(testModule);
  }
  
  @Test
  public void testAddData() {
    dataConllection.insert(new BasicDBObject(),new BasicDBObject());
  }

  @AfterClass
  public static void destory() {
    DBCollectionFactory.getMongoClient().close();
  }
}
