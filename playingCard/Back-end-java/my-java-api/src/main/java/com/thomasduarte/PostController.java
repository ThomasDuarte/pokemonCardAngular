@RestController
@RequestMapping("/api/posts")
public class PostController {

    private PostService postService; // Assuming a service class for handling business logic

    @GetMapping("/{id}")
    public ResponseEntity<Post> getPostById(@PathVariable Long id) {
        Post post = postService.getPostById(id);
        return ResponseEntity.ok(post);
    }
}