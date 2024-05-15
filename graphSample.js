class Graph{
   constructor(){
      this.adjacencyList = {}
   }

   addVertex(vertex){
      if(!this.adjacencyList[vertex]){
         this.adjacencyList[vertex] = new Set()
      }
   }

   addEdge(vertex1,vertex2){
      if(!this.adjacencyList[vertex1]){
         this.addVertex(vertex1)
      }
      if(!this.adjacencyList[vertex2]){
         this.addVertex(vertex2)
      }
      this.adjacencyList[vertex1].add(vertex2)
      this.adjacencyList[vertex2].add(vertex1)
   }

   dfs(startVertex){
      let visited = {}
      let result = []

      const dfsHelper = (vertex) => {
         if(!vertex) return
         visited[vertex] = true
         result.push(vertex)

         for(let next of this.adjacencyList[vertex]){
            if(!visited[next]){
               dfsHelper(next)
            }
         }
      } 

      dfsHelper(startVertex)
      return result
   }

   bfs(startVertex){
      const queue = [startVertex]
      const visited = {}
      const result = []

      visited[startVertex] = true
      while(queue.length > 0){
         let currentVertex = queue.shift()
         result.push(currentVertex)
         for(let next of this.adjacencyList[currentVertex]){
            if(!visited[next]){
               visited[next] = true
               queue.push(next)
            }
         }
      }
      return result
   }

   isCyclic(){
      const visited = {}
      const depthFS = (vertex,parent) => {
         visited[vertex] = true
         for(let next of this.adjacencyList[vertex]){
            if(!visited[next]){
               if(depthFS(next,vertex)){
                  return true
               }
            } else if (next !== parent){
               return true
            }
         }
         return false
      }

      for(let vertex in this.adjacencyList){
         if(!visited[vertex]){
            if(depthFS(vertex,null)){
               return true
            }
         }
      }

      return false
   }
}

const graph = new Graph()

graph.addVertex(4)
graph.addVertex(3)
graph.addVertex(8)
graph.addVertex(38)

graph.addEdge(4,3)
graph.addEdge(3,8)
graph.addEdge(8,38)
graph.addEdge(4,38)
// graph.addEdge(38,3)

console.log(graph.dfs(4));
console.log(graph.bfs(4));

console.log('Cycle ? :',graph.isCyclic());