package org.pwk.com.webservice.admin

import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

import java.util.concurrent.Callable
import java.util.concurrent.CompletableFuture
import java.util.concurrent.ExecutorService
import java.util.concurrent.ForkJoinPool

/**
 * Created by peter on 9/17/16.
 */

@RestController
class UserService {

    @RequestMapping("/admin/user/another")
    String home() {
        return "another test ehh.......";
    }
}
