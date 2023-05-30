	.text
	.global power
	.type   power,@function

power:

	# Assume that RDI = x and RSI = n
        # Goal: Compute x to the power of n
	# ADD your code here

	movq	$1, %rax	# result = 1
	xorq	%rcx, %rcx	# count = 0

	jmp 	cond		# while ...
loop:
	imulq	%rdi, %rax	# result = result * x
	incq	%rcx		# count++

cond:
	// while (count < n) ...
	cmpq	%rsi, %rcx	# compare count to n
	jl	loop		# if count < n, keep looping
	
end:
	ret # Returns what is in RAX (result)
	# END your code
	
	.size   power, .-power
