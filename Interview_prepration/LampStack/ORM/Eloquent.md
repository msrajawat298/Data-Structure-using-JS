# Eloquent ORM

- Eloquent ORM is an object-relational mapper (ORM) included with Laravel, a popular PHP framework. 
- It provides a simple and elegant way to interact with your database using an ActiveRecord implementation. 
- Each database table has a corresponding "Model" that is used to interact with that table. 
- Models allow you to query for data in your tables, as well as insert new records into the table.

---

- **How can I define a model in Laravel's Eloquent ORM?**
    - To define a model in Laravel's Eloquent ORM, follow these steps:
        - **Create the Model:** 
            - Use the Artisan command to generate a new model.
            - This command will create a new file ```Post.php``` in the ```app/Models``` directory.
                ```sh
                php artisan make:model Post
                ```
        - **Define the Model:** Specify the table and any relationships or attributes.
        - ```php
            <?php
            namespace App\Models;

            use Illuminate\Database\Eloquent\Factories\HasFactory;
            use Illuminate\Database\Eloquent\Model;

            class Post extends Model
            {
                use HasFactory;

                // Specify the table if it's not the plural form of the model name
                protected $table = 'posts';

                // Define fillable attributes for mass assignment
                protected $fillable = ['title', 'content'];

                // Define any relationships
                public function user()
                {
                    return $this->belongsTo(User::class);
                }
            }
        ```
---

- ***How can I perform CRUD operations using Laravel's Eloquent ORM?***

    - **Create**
        - ```php
            <?php
            // Using the create method
            Post::create([
                'title' => 'New Post',
                'content' => 'This is the content of the new post.'
            ]);
            
            // Using the save method
            $post = new Post;
            $post->title = 'New Post';
            $post->content = 'This is the content of the new post.';
            $post->save();
        ```
    - **Read**
        - ```php
            <?php
            // Retrieve all posts
            $posts = Post::all();

            // Retrieve a post by its primary key
            $post = Post::find(1);

            // Retrieve the first post matching the given attributes
            $post = Post::where('title', 'New Post')->first();
        ```
    - **Update**
        - ```php
            <?php
            // Retrieve the post
            $post = Post::find(1);

            // Update the post's attributes
            $post->title = 'Updated Post Title';
            $post->content = 'Updated content of the post.';

            // Save the changes
            $post->save();
        ```
    - **Delete**
        - ```php
            <?php
            // Retrieve the post
            $post = Post::find(1);
            
            // Delete the post
            $post->delete();
        ```
---
- **How can I retrieve records from the database based on specific conditions using Laravel's Eloquent ORM?**
```php
<?php
// Retrieve posts where the title is 'New Post'
$posts = Post::where('title', 'New Post')->get();

// Retrieve posts where the content is not null
$posts = Post::whereNotNull('content')->get();

// Retrieve posts where the title contains 'Post'
$posts = Post::where('title', 'like', '%Post%')->get();

// Retrieve posts where the title is 'New Post' or the content is 'This is the content of the new post.'
$posts = Post::where('title', 'New Post')
             ->orWhere('content', 'This is the content of the new post.')
             ->get();

// Retrieve posts where the id is between 1 and 10
$posts = Post::whereBetween('id', [1, 10])->get();

// Retrieve posts where the content is null
$posts = Post::whereNull('content')->get();

// Update all posts where the title is 'Old Title' to have the title 'New Title'
Post::where('title', 'Old Title')->update(['title' => 'New Title']);

// Update all posts where the content is null to have a default content
Post::whereNull('content')->update(['content' => 'Default content']);

// Delete all posts where the title is 'Old Title'
Post::where('title', 'Old Title')->delete();

// Delete all posts where the content is null
Post::whereNull('content')->delete();


// Retrieve posts with pagination, 10 posts per page
$posts = Post::paginate(10);

// Retrieve posts ordered by title in ascending order
$posts = Post::orderBy('title', 'asc')->get();

// Retrieve posts ordered by created_at in descending order
$posts = Post::orderBy('created_at', 'desc')->get();

// Retrieve the first 5 posts
$posts = Post::take(5)->get();

// Alternatively, using the limit method
$posts = Post::limit(5)->get();
```