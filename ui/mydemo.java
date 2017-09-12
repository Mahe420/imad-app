import java.io.*;
import java.util.*;
import javax.servlet.*;

public class mydemo extends HttpServlet
{
 public void get(HttpServletRequest req,HttpServletResponse res)
 throws ServletException,IOException
 {
  PrintWriter out=res.getWriter();
  String name=req.getParameter("name").value;
   out.println(name);
  }
out.close();}
