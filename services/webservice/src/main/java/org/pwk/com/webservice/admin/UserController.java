package org.pwk.com.webservice.admin;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.CompletableFuture;
import java.util.concurrent.CompletionStage;

/**
 * Created by peter on 9/17/16.
 */

@RestController
@RequestMapping("/admin/user")
public class UserController {

    @RequestMapping
    public String home() {
        return  "Hello World";
    }

    @RequestMapping("/async")
    public CompletionStage<String> getAsyncCall() {
        return CompletableFuture.supplyAsync(() -> {
            return "Hello from async";
        });
    }
}
