# 								Java常用编程公共方法

# Java Coding

- System out print sample

  ```java
   public static void main(String[] args) {
          boolean istrue = isIDCard("110101199308150012");
          System.out.println(istrue);
      }
  ```

 

- StringUtil sample

  ```
  
      /***
       * 判断字符是否为空，空格、制表符、tab
       * @param str
       * @return
       */
      public static boolean isBlank(CharSequence str) {
          int strLen;
          if (str != null && (strLen = str.length()) != 0) {
              for (int i = 0; i < strLen; ++i) {
                  // 判断字符是否为空格、制表符、tab
                  if (!Character.isWhitespace(str.charAt(i))) {
                      return false;
                  }
              }
              return true;
          } else {
              return true;
          }
      }
  
  
      /***
       *　判断字符串不能为空，空格、制表符、tab
       * @param str
       * @return
       */
      public static boolean isNotBlank(CharSequence str) {
          return !isBlank(str);
      }
  
  
      /**
       * 判断所有字符串是有有为空，空格、制表符、tab
       *
       * @param css
       * @return
       */
      public static boolean isAnyBlank(CharSequence... css) {
          if (ArrayUtils.isEmpty(css)) {
              return false;
          } else {
              CharSequence[] var1 = css;
              int var2 = css.length;
              for (int var3 = 0; var3 < var2; ++var3) {
                  CharSequence cs = var1[var3];
                  if (isBlank(cs)) {
                      return true;
                  }
              }
              return false;
          }
      }
  ```

  



  