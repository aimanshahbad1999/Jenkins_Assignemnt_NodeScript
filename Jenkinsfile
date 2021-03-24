node{
   stage("Git Clone"){
       print("Git Clone")
        checkout([$class: 'GitSCM', branches: [[name: 'master']],
        userRemoteConfigs: [[url: 'https://github.com/aimanshahbad1999/Jenkins_Assignemnt_NodeScript.git']]])
   }
  stage("Select CSV File") {
   def inputFile = input message: 'Upload file', parameters: [file(name: 'samplee.csv')]
   new hudson.FilePath(new File("$workspace/samplee.csv")).copyFrom(inputFile)
  }
  stage("Update Database"){
       File myfile=new File("$workspace/samplee.csv")
       File csvFile=new File("$workspace/data.csv")
       readFile("samplee.csv").split('\n').each { line ->
            print(line)
            csvFile << "\n"+line
            
        }
        sh "node index.js"
        
               
  }
}
