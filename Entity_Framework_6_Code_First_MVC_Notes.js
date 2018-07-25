/*
Creating a Connection String and Working with SQL Server LocalDB
	==> add a connection string in the Web.config file of the application.
	==> LocalDB is a lightweight version of the SQL Server Express Database Engine that starts on demand and runs in user mode. LocalDB runs in a special execution mode of SQL Server Express that enables you to work with databases as .mdf files. Typically, LocalDB database files are kept in the App_Data folder of a web project.
	==> SQL Server Express is not recommended for use in production web applications. LocalDB in particular should not be used for production with a web application because it is not designed to work with IIS. 
	==> a LocalDB database can be easily migrated to SQL Server or SQL Azure.

*/


/*
The two connection strings are very similar. The first connection string is named DefaultConnection and is used for the membership database to control who can access the application.
*/

/*
The connection string you've added specifies a LocalDB database named Movie.mdf located in the App_Data folder. for more information on membership, authentication and security, see my tutorial:
	https://docs.microsoft.com/en-us/aspnet/core/security/authorization/secure-data?view=aspnetcore-2.1 

The name of the connection string must match the name of the DbContext class.

If you don't specify a connection string, Entity Framework will create a LocalDB database in the users directory with the fully qualified name of the DbContext class (in this case MvcMovie.Models.MovieDBContext). 

You can name the database anything you like, as long as it has the .MDF suffix.
*/
<add name="SchoolContext" 
   connectionString="Data Source=(LocalDb)\MSSQLLocalDB;Initial Catalog=ContosoUniversity1;Integrated Security=SSPI;AttachDBFilename=|DataDirectory|\Movies.mdf" 
   providerName="System.Data.SqlClient" 
/>

//EF 6 code first
<connectionStrings>
    <add name="SchoolContext" connectionString="Data Source=(LocalDb)\v11.0;Initial Catalog=ContosoUniversity1;Integrated Security=SSPI;AttachDBFilename=|DataDirectory|\School.mdf" providerName="System.Data.SqlClient"/>
</connectionStrings>

<connectionStrings>
  <add name="DefaultConnection" connectionString="Data Source=(LocalDb)\MSSQLLocalDB;Initial Catalog=aspnet-MvcMovie-fefdc1f0-bd81-4ce9-b712-93a062e01031;Integrated Security=SSPI;AttachDBFilename=|DataDirectory|\aspnet-MvcMovie-fefdc1f0-bd81-4ce9-b712-93a062e01031.mdf" providerName="System.Data.SqlClient" />
  <add name="MovieDBContext" connectionString="Data Source=(LocalDb)\MSSQLLocalDB;Initial Catalog=aspnet-MvcMovie;Integrated Security=SSPI;AttachDBFilename=|DataDirectory|\Movies.mdf" providerName="System.Data.SqlClient" />
</connectionStrings>



//Context

  <contexts>
    <context type="ContosoUniversity.DAL.SchoolContext, ContosoUniversity">
      <databaseInitializer type="ContosoUniversity.DAL.SchoolInitializer, ContosoUniversity" />
    </context>
  </contexts>