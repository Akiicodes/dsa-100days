export const solutions: any = {

  1: {
    github: `/*Problem: Write a C program to insert an element x at a given 1-based position pos in an array of n integers. Shift existing elements to the right to make space.

Input:
- First line: integer n
- Second line: n space-separated integers (the array)
- Third line: integer pos (1-based position)
- Fourth line: integer x (element to insert)

Output:
- Print the updated array (n+1 integers) in a single line, space-separated

Example:
Input:
5
1 2 4 5 6
3
3

Output:
1 2 3 4 5 6

Explanation: Insert 3 at position 3, elements [4,5,6] shift right*/

//Solution: 

#include <stdio.h>

int main() {
    int n, pos, x;
    int arr[100];  

 
    scanf("%d", &n);

    for(int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    
    scanf("%d", &pos);

   
    scanf("%d", &x);

  
    for(int i = n; i >= pos; i--) {
        arr[i] = arr[i - 1];
    }

  
    arr[pos - 1] = x;


    for(int i = 0; i <= n; i++) {
        printf("%d ", arr[i]);
    }

    return 0;
}
`,

    leetcode: `/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
     int *result = (int *)malloc(2 * sizeof(int));
    *returnSize = 2;

    for(int i = 0; i < numsSize; i++) {
        for(int j = i + 1; j < numsSize; j++) {
            if(nums[i] + nums[j] == target) {
                result[0] = i;
                result[1] = j;
                return result;
            }
        }
    }

    return result; // problem guarantees one solution
}
    

`
  },

  2: {
    github: `/*Delete an Element from an Array

Problem: Write a C program to delete the element at a given 1-based position pos from an array of n integers. Shift remaining elements to the left.

Input:
- First line: integer n
- Second line: n space-separated integers
- Third line: integer pos (1-based position to delete)

Output:
- Print the updated array with (n-1) elements, space-separated

Example:
Input:
5
10 20 30 40 50
2

Output:
10 30 40 50

Explanation: Delete position 2 (element 20), remaining elements shift left*/

#include <stdio.h>

int main() {
    int n, pos;
    int arr[100];   // assuming max size 100

    // Input size
    scanf("%d", &n);

    // Input array
    for(int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    // Input position (1-based)
    scanf("%d", &pos);

    // Shift elements to the left
    for(int i = pos - 1; i < n - 1; i++) {
        arr[i] = arr[i + 1];
    }

    // Print updated array (size n-1)
    for(int i = 0; i < n - 1; i++) {
        printf("%d ", arr[i]);
    }

    return 0;
}`,
    leetcode: `int maxProfit(int* prices, int pricesSize) {
    int minPrice = prices[0];
    int maxProfit = 0;

    for(int i = 1; i < pricesSize; i++) {
        if(prices[i] < minPrice) {
            minPrice = prices[i];
        }
        else if(prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }

    return maxProfit;
}
`
  },
   3: {
    github: `/*Problem: Implement linear search to find key k in an array. Count and display the number of comparisons performed.

Input:
- First line: integer n (array size)
- Second line: n space-separated integers
- Third line: integer k (key to search)

Output:
- Line 1: "Found at index i" OR "Not Found"
Line 2: "Comparisons = c"

Example:
Input:
5
10 20 30 40 50
30

Output:
Found at index 2
Comparisons = 3

Explanation: Compared with 10, 20, 30 (found at index 2 with 3 comparisons)*/

#include <stdio.h>

int main() {
    int n, k;
    int arr[100];
    int comparisons = 0;
    int foundIndex = -1;

    
    scanf("%d", &n);

    
    for(int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    
    scanf("%d", &k);

    
    for(int i = 0; i < n; i++) {
        comparisons++;
        if(arr[i] == k) {
            foundIndex = i;
            break;
        }
    }

    
    if(foundIndex != -1) {
        printf("Found at index %d\n", foundIndex);
    } else {
        printf("Not Found\n");
    }

    printf("Comparisons = %d", comparisons);

    return 0;
}`,
    leetcode: `Geeks for Geeks solution not availaible right now!`
  },
   4: {
    github: `/*Problem: Given an array of n integers, reverse the array in-place using two-pointer approach.

Input:
- First line: integer n
- Second line: n space-separated integers

Output:
- Print the reversed array, space-separated

Example:
Input:
5
1 2 3 4 5

Output:
5 4 3 2 1

Explanation: Swap pairs from both ends: (1,5), (2,4), middle 3 stays*/

//Solution:
#include <stdio.h>

int main() {
    int n;
    int arr[100];

    
    scanf("%d", &n);

    
    for(int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    int left = 0, right = n - 1;
    int temp;

    
    while(left < right) {
        temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }

    
    for(int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }

    return 0;
}`,
    leetcode: `int removeElement(int* nums, int numsSize, int val) {
    int k = 0;  

    for(int i = 0; i < numsSize; i++) {
        if(nums[i] != val) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
}
`
  },
   5: {
    github: `/*Problem: A system receives two separate logs of user arrival times from two different servers. Each log is already sorted in ascending order. Your task is to create a single chronological log that preserves the correct order of arrivals.

Input:
- First line: integer p (number of entries in server log 1)
- Second line: p sorted integers representing arrival times from server 1
- Third line: integer q (number of entries in server log 2)
- Fourth line: q sorted integers representing arrival times from server 2)

Output:
- Print a single line containing all arrival times in chronological order, separated by spaces

Example:
Input:
5
10 20 30 50 70
4
15 25 40 60

Output:
10 15 20 25 30 40 50 60 70

Explanation: Compare the next unprocessed arrival time from both logs and append the earlier one to the final log until all entries are processed*/

//Solution:
#include <stdio.h>

int main() {
    int p, q;
    int a[100], b[100], merged[200];

    // Input size of first log
    scanf("%d", &p);

    // Input first sorted array
    for(int i = 0; i < p; i++) {
        scanf("%d", &a[i]);
    }

    // Input size of second log
    scanf("%d", &q);

    // Input second sorted array
    for(int i = 0; i < q; i++) {
        scanf("%d", &b[i]);
    }

    int i = 0, j = 0, k = 0;

    // Merge both arrays
    while(i < p && j < q) {
        if(a[i] <= b[j]) {
            merged[k++] = a[i++];
        } else {
            merged[k++] = b[j++];
        }
    }

    // Copy remaining elements of a[]
    while(i < p) {
        merged[k++] = a[i++];
    }

    // Copy remaining elements of b[]
    while(j < q) {
        merged[k++] = b[j++];
    }

    // Print merged array
    for(int x = 0; x < k; x++) {
        printf("%d ", merged[x]);
    }

    return 0;
}`,
    leetcode: `void merge(int* nums1, int nums1Size, int m, int* nums2, int nums2Size, int n) {
    int i = m - 1;        
    int j = n - 1;        
    int k = m + n - 1;    

    
    while(i >= 0 && j >= 0) {
        if(nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
        }
    }


    while(j >= 0) {
        nums1[k--] = nums2[j--];
    }
}
`
  },
   6: {
    github: `/*Problem: Given a sorted array of n integers, remove duplicates in-place. Print only unique elements in order.

Input:
- First line: integer n
- Second line: n space-separated integers (sorted array)

Output:
- Print unique elements only, space-separated

Example:
Input:
6
1 1 2 2 3 3

Output:
1 2 3

Explanation: Keep first occurrence of each element: 1, 2, 3*/

//Solution:
#include <stdio.h>

int main() {
    int n;
    int arr[100];

    
    scanf("%d", &n);

    
    for(int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    if(n == 0) return 0;

    int k = 1;  

    
    for(int i = 1; i < n; i++) {
        if(arr[i] != arr[k - 1]) {
            arr[k] = arr[i];
            k++;
        }
    }

    
    for(int i = 0; i < k; i++) {
        printf("%d ", arr[i]);
    }

    return 0;
}`,
    leetcode: `void moveZeroes(int* nums, int numsSize) {
    int k = 0;  

    
    for(int i = 0; i < numsSize; i++) {
        if(nums[i] != 0) {
            nums[k++] = nums[i];
        }
    }

    
    while(k < numsSize) {
        nums[k++] = 0;
    }
}
`
  },
   7: {
    github: `#include <stdio.h>


int fib(int n) {
    if(n == 0)
        return 0;
    if(n == 1)
        return 1;

    return fib(n - 1) + fib(n - 2);
}

int main() {
    int n;
    scanf("%d", &n);

    printf("%d", fib(n));

    return 0;
}`,
    leetcode: `int fib(int n){
    if(n == 0)
        return 0;
    if(n == 1)
        return 1;

    return fib(n - 1) + fib(n - 2);
}
`
  },
   8: {
    github: `/*Problem: Given integers a and b, compute a^b using recursion without using pow() function.

Input:
- Two space-separated integers a and b

Output:
- Print a raised to power b

Example:
Input:
2 5

Output:
32

Explanation: 2^5 = 2 * 2 * 2 * 2 * 2 = 32*/

//Solution:

#include <stdio.h>


long long power(int a, int b) {
    if(b == 0)
        return 1;

    return a * power(a, b - 1);
}

int main() {
    int a, b;
    scanf("%d %d", &a, &b);

    printf("%lld", power(a, b));

    return 0;
}`,
    leetcode: `bool isPowerOfTwo(int n) {
    if(n <= 0)
        return false;

    return (n & (n - 1)) == 0;
}
`
  },
   9: {
    github: `/*Problem: A secret system stores code names in forward order. To display them in mirror format, you must transform the given code name so that its characters appear in the opposite order.

Input:
- Single line: a lowercase string containing only alphabetic characters (no spaces)

Output:
- Print the transformed code name after applying the mirror operation

Example:
Input:
hello

Output:
olleh

Explanation: The first character moves to the last position, the second to the second-last, and so on until the entire string is mirrored*/
//Solution: 

#include <stdio.h>
#include <string.h>

int main() {
    char str[1000];

    
    scanf("%s", str);

    int left = 0;
    int right = strlen(str) - 1;
    char temp;

    
    while(left < right) {
        temp = str[left];
        str[left] = str[right];
        str[right] = temp;
        left++;
        right--;
    }

    
    printf("%s", str);

    return 0;
}`,
    leetcode: `void reverseString(char* s, int sSize) {
    int left = 0;
    int right = sSize - 1;
    char temp;

    while (left < right) {
        
        temp = s[left];
        s[left] = s[right];
        s[right] = temp;

        left++;
        right--;
    }
}
`
  },
   10: {
    github: `/*Problem: Read a string and check if it is a palindrome using two-pointer comparison.

Input:
- Single line: string s

Output:
- Print YES if palindrome, otherwise NO

Example:
Input:
level

Output:
YES

Explanation: String reads same forwards and backwards*/

#include <stdio.h>
#include <string.h>

int main() {
    char s[1000];
    scanf("%s", s);

    int left = 0;
    int right = strlen(s) - 1;
    int isPalindrome = 1;

    // Two-pointer comparison
    while(left < right) {
        if(s[left] != s[right]) {
            isPalindrome = 0;
        }`,
    leetcode: `#include <stdlib.h>

int* intersect(int* nums1, int nums1Size, int* nums2, int nums2Size, int* returnSize) {
    int freq[1001] = {0};

    // Count frequency of elements in nums1
    for(int i = 0; i < nums1Size; i++) {
        freq[nums1[i]]++;
    }

    // Allocate maximum possible space
    int* result = (int*)malloc(sizeof(int) * (nums1Size < nums2Size ? nums1Size : nums2Size));
    int k = 0;

    // Find intersection
    for(int i = 0; i < nums2Size; i++) {
        if(freq[nums2[i]] > 0) {
            result[k++] = nums2[i];
            freq[nums2[i]]--;
        }
    }

    *returnSize = k;
    return result;
}
`
  },
   11: {
    github: `/*Problem: Write a program to perform addition of two matrices having the same dimensions. The sum of two matrices is obtained by adding corresponding elements of the matrices.

Input:
- First line: two integers m and n representing the number of rows and columns
- Next m lines: n integers each representing the elements of the first matrix
- Next m lines: n integers each representing the elements of the second matrix

Output:
- Print the resultant matrix after addition, with each row on a new line and elements separated by spaces

Example:
Input:
3 3
1 2 3
4 5 6
7 8 9
9 8 7
6 5 4
3 2 1

Output:
10 10 10
10 10 10
10 10 10

Explanation:
Each element of the result matrix is the sum of the corresponding elements from the two input matrices.

Test Cases:

Test Case 1:
Input:
2 2
1 2
3 4
5 6
7 8
Output:
6 8
10 12

Test Case 2:
Input:
1 3
10 20 30
1 2 3
Output:
11 22 33

Test Case 3:
Input:
3 1
1
2
3
4
5
6
Output:
5
7
9*/

//Solution:
#include <stdio.h>

int main() {
    int m, n;
    scanf("%d %d", &m, &n);

    int A[100][100], B[100][100], C[100][100];

    for(int i = 0; i < m; i++) {
        for(int j = 0; j < n; j++) {
            scanf("%d", &A[i][j]);
        }
    }

    for(int i = 0; i < m; i++) {
        for(int j = 0; j < n; j++) {
            scanf("%d", &B[i][j]);
        }
    }

    for(int i = 0; i < m; i++) {
        for(int j = 0; j < n; j++) {
            C[i][j] = A[i][j] + B[i][j];
        }
    }

    for(int i = 0; i < m; i++) {
        for(int j = 0; j < n; j++) {
            printf("%d ", C[i][j]);
        }
        printf("\n");
    }

    return 0;
}`,
    leetcode: `#include <stdlib.h>

int** transpose(int** matrix, int matrixSize, int* matrixColSize, int* returnSize, int** returnColumnSizes) {
    int m = matrixSize;
    int n = matrixColSize[0];

    *returnSize = n;

    *returnColumnSizes = (int*)malloc(n * sizeof(int));
    for(int i = 0; i < n; i++) {
        (*returnColumnSizes)[i] = m;
    }

    int** result = (int**)malloc(n * sizeof(int*));
    for(int i = 0; i < n; i++) {
        result[i] = (int*)malloc(m * sizeof(int));
    }

    for(int i = 0; i < m; i++) {
        for(int j = 0; j < n; j++) {
            result[j][i] = matrix[i][j];
        }
    }

    return result;
}
`
  },
   12: {
    github: `/*Problem: Write a program to check whether a given matrix is symmetric. A matrix is said to be symmetric if it is a square matrix and is equal to its transpose (i.e., element at position [i][j] is equal to element at position [j][i] for all valid i and j).

Input:
- First line: two integers m and n representing the number of rows and columns
- Next m lines: n integers each representing the elements of the matrix

Output:
- Print "Symmetric Matrix" if the given matrix is symmetric
- Otherwise, print "Not a Symmetric Matrix"

Example:
Input:
3 3
1 2 3
2 4 5
3 5 6

Output:
Symmetric Matrix

Explanation:
The matrix is square (3 × 3) and for every i and j, element[i][j] = element[j][i].

Test Cases:

Test Case 1:
Input:
2 2
1 2
2 1
Output:
Symmetric Matrix

Test Case 2:
Input:
3 3
1 0 1
2 3 4
1 4 5
Output:
Not a Symmetric Matrix

Test Case 3:
Input:
2 3
1 2 3
4 5 6
Output:
Not a Symmetric Matrix*/

//Solution

#include <stdio.h>

int main() {
    int m, n;
    scanf("%d %d", &m, &n);

    int a[100][100];

    for(int i = 0; i < m; i++) {
        for(int j = 0; j < n; j++) {
            scanf("%d", &a[i][j]);
        }
    }

    if(m != n) {
        printf("Not a Symmetric Matrix");
        return 0;
    }

    for(int i = 0; i < m; i++) {
        for(int j = 0; j < n; j++) {
            if(a[i][j] != a[j][i]) {
                printf("Not a Symmetric Matrix");
                return 0;
            }
        }
    }

    printf("Symmetric Matrix");

    return 0;
}`,
    leetcode: `bool isToeplitzMatrix(int** matrix, int matrixSize, int* matrixColSize) {
    int m = matrixSize;
    int n = matrixColSize[0];

    for(int i = 1; i < m; i++) {
        for(int j = 1; j < n; j++) {
            if(matrix[i][j] != matrix[i-1][j-1]) {
                return false;
            }
        }
    }

    return true;
}
`
  },
   13: {
    github: `/*Problem: You are given a rectangular matrix of integers. Starting from the outer boundary, traverse the matrix in a clockwise manner and continue moving inward layer by layer until all elements are visited.

Input:
- First line: two integers r and c representing the number of rows and columns
- Next r lines: c integers each representing the matrix elements

Output:
- Print all visited elements in the order of traversal, separated by spaces

Example:
Input:
3 3
1 2 3
4 5 6
7 8 9

Output:
1 2 3 6 9 8 7 4 5

Explanation:
The traversal begins along the top row, proceeds down the rightmost column, then moves across the bottom row in reverse, and finally goes up the leftmost column. The same pattern repeats for the inner submatrix.

Test Cases:

Test Case 1:
Input:
2 3
1 2 3
4 5 6
Output:
1 2 3 6 5 4

Test Case 2:
Input:
3 1
7
8
9
Output:
7 8 9 */

//Solution:
#include <stdio.h>

int main() {
    int r, c;
    scanf("%d %d", &r, &c);

    int a[100][100];

    for(int i = 0; i < r; i++) {
        for(int j = 0; j < c; j++) {
            scanf("%d", &a[i][j]);
        }
    }

    int top = 0, bottom = r - 1;
    int left = 0, right = c - 1;

    while(top <= bottom && left <= right) {
        for(int j = left; j <= right; j++)
            printf("%d ", a[top][j]);
        top++;

        for(int i = top; i <= bottom; i++)
            printf("%d ", a[i][right]);
        right--;

        if(top <= bottom) {
            for(int j = right; j >= left; j--)
                printf("%d ", a[bottom][j]);
            bottom--;
        }

        if(left <= right) {
            for(int i = bottom; i >= top; i--)
                printf("%d ", a[i][left]);
            left++;
        }
    }

    return 0;
}`,
    leetcode: `#include <stdlib.h>

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* spiralOrder(int** matrix, int matrixSize, int* matrixColSize, int* returnSize) {
    int m = matrixSize;
    int n = matrixColSize[0];

    int* result = (int*)malloc(m * n * sizeof(int));
    *returnSize = m * n;

    int top = 0, bottom = m - 1;
    int left = 0, right = n - 1;
    int k = 0;

    while(top <= bottom && left <= right) {
        for(int j = left; j <= right; j++)
            result[k++] = matrix[top][j];
        top++;

        for(int i = top; i <= bottom; i++)
            result[k++] = matrix[i][right];
        right--;

        if(top <= bottom) {
            for(int j = right; j >= left; j--)
                result[k++] = matrix[bottom][j];
            bottom--;
        }

        if(left <= right) {
            for(int i = bottom; i >= top; i--)
                result[k++] = matrix[i][left];
            left++;
        }
    }

    return result;
}
`
  },
   14: {
    github: `/*Problem: Write a program to check whether a given square matrix is an Identity Matrix. An identity matrix is a square matrix in which all diagonal elements are 1 and all non-diagonal elements are 0.

Input:
- First line: integer n representing number of rows and columns
- Next n lines: n integers each representing the matrix elements

Output:
- Print "Identity Matrix" if the matrix satisfies the condition
- Otherwise, print "Not an Identity Matrix"

Example:
Input:
3
1 0 0
0 1 0
0 0 1

Output:
Identity Matrix*/

//Solution:
#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);

    int a[100][100];

    for(int i = 0; i < n; i++) {
        for(int j = 0; j < n; j++) {
            scanf("%d", &a[i][j]);
        }
    }

    for(int i = 0; i < n; i++) {
        for(int j = 0; j < n; j++) {
            if(i == j) {
                if(a[i][j] != 1) {
                    printf("Not an Identity Matrix");
                    return 0;
                }
            } else {
                if(a[i][j] != 0) {
                    printf("Not an Identity Matrix");
                    return 0;
                }
            }
        }
    }

    printf("Identity Matrix");

    return 0;
}`,
    leetcode: `void rotate(int** matrix, int matrixSize, int* matrixColSize) {
    int n = matrixSize;

    
    for(int i = 0; i < n; i++) {
        for(int j = i + 1; j < n; j++) {
            int temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    
    for(int i = 0; i < n; i++) {
        int left = 0, right = n - 1;
        while(left < right) {
            int temp = matrix[i][left];
            matrix[i][left] = matrix[i][right];
            matrix[i][right] = temp;
            left++;
            right--;
        }
    }
}
`
  },
    15: {
    github: `/*Problem: Given a matrix, calculate the sum of its primary diagonal elements. The primary diagonal consists of elements where row index equals column index.

Input:
- First line: two integers m and n
- Next m lines: n integers each

Output:
- Print the sum of the primary diagonal elements

Example:
Input:
3 3
1 2 3
4 5 6
7 8 9

Output:
15

Explanation:
1 + 5 + 9 = 15*/

//Solution:
#include <stdio.h>

int main() {
    int m, n;
    scanf("%d %d", &m, &n);

    int a[100][100];
    int sum = 0;

    for(int i = 0; i < m; i++) {
        for(int j = 0; j < n; j++) {
            scanf("%d", &a[i][j]);
            if(i == j)
                sum += a[i][j];
        }
    }

    printf("%d", sum);

    return 0;
}`,
    leetcode: `void setZeroes(int** matrix, int matrixSize, int* matrixColSize) {
    int m = matrixSize;
    int n = matrixColSize[0];

    int firstRowZero = 0, firstColZero = 0;

    
    for(int i = 0; i < m; i++)
        if(matrix[i][0] == 0)
            firstColZero = 1;

    
    for(int j = 0; j < n; j++)
        if(matrix[0][j] == 0)
            firstRowZero = 1;

    
    for(int i = 1; i < m; i++) {
        for(int j = 1; j < n; j++) {
            if(matrix[i][j] == 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    
    for(int i = 1; i < m; i++) {
        for(int j = 1; j < n; j++) {
            if(matrix[i][0] == 0 || matrix[0][j] == 0)
                matrix[i][j] = 0;
        }
    }

    
    if(firstColZero)
        for(int i = 0; i < m; i++)
            matrix[i][0] = 0;

    
    if(firstRowZero)
        for(int j = 0; j < n; j++)
            matrix[0][j] = 0;
}
`
  },
    16: {
    github: `/*Problem: Given an array of integers, count the frequency of each distinct element and print the result.

Input:
- First line: integer n (size of array)
- Second line: n integers

Output:
- Print each element followed by its frequency in the format element:count

Example:
Input:
5
1 2 2 3 1

Output:
1:2 2:2 3:1*/

//Solution:

#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);

    int a[100], visited[100] = {0};

    for(int i = 0; i < n; i++)
        scanf("%d", &a[i]);

    for(int i = 0; i < n; i++) {
        if(visited[i])
            continue;

        int count = 1;
        for(int j = i + 1; j < n; j++) {
            if(a[i] == a[j]) {
                count++;
                visited[j] = 1;
            }
        }

        printf("%d:%d ", a[i], count);
    }

    return 0;
}`,
    leetcode: `void reverse(int* nums, int start, int end) {
    while(start < end) {
        int temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}

void rotate(int* nums, int numsSize, int k) {
    if(numsSize == 0) return;

    k = k % numsSize;

    reverse(nums, 0, numsSize - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, numsSize - 1);
}
`
  },
    17: {
    github: `/*Problem: Write a program to find the maximum and minimum values present in a given array of integers.

Input:
- First line: integer n
- Second line: n integers

Output:
- Print the maximum and minimum elements

Example:
Input:
6
3 5 1 9 2 8

Output:
Max: 9
Min: 1*/

//Solution


#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);

    int a[100];
    for(int i = 0; i < n; i++)
        scanf("%d", &a[i]);

    int max = a[0], min = a[0];

    for(int i = 1; i < n; i++) {
        if(a[i] > max)
            max = a[i];
        if(a[i] < min)
            min = a[i];
    }

    printf("Max: %d\n", max);
    printf("Min: %d", min);

    return 0;
}`,
    leetcode: `int maxSubArray(int* nums, int numsSize) {
    int current = nums[0];
    int maxSum = nums[0];

    for(int i = 1; i < numsSize; i++) {
        if(current + nums[i] > nums[i])
            current = current + nums[i];
        else
            current = nums[i];

        if(current > maxSum)
            maxSum = current;
    }

    return maxSum;
}
`
  },
    18: {
    github: `/*Problem: Given an array of integers, rotate the array to the right by k positions.

Input:
- First line: integer n
- Second line: n integers
- Third line: integer k

Output:
- Print the rotated array

Example:
Input:
5
1 2 3 4 5
2

Output:
4 5 1 2 3*/

//Solution:

#include <stdio.h>

void reverse(int arr[], int start, int end) {
    while(start < end) {
        int temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

int main() {
    int n;
    scanf("%d", &n);

    int arr[100];

    for(int i = 0; i < n; i++)
        scanf("%d", &arr[i]);

    int k;
    scanf("%d", &k);

    k = k % n;

    reverse(arr, 0, n - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, n - 1);

    for(int i = 0; i < n; i++)
        printf("%d ", arr[i]);

    return 0;
}`,
    leetcode: `#include <stdlib.h>

int* productExceptSelf(int* nums, int numsSize, int* returnSize) {
    int* result = (int*)malloc(numsSize * sizeof(int));
    *returnSize = numsSize;

    int prefix = 1;
    for(int i = 0; i < numsSize; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }

    int suffix = 1;
    for(int i = numsSize - 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= nums[i];
    }

    return result;
}
`
  },
    19: {
    github: `/*Problem: Given an array of integers, find two elements whose sum is closest to zero.

Input:
- First line: integer n
- Second line: n space-separated integers

Output:
- Print the pair of elements whose sum is closest to zero

Example:
Input:
5
1 60 -10 70 -80

Output:
-10 1

Explanation: Among all possible pairs, the sum of -10 and 1 is -9, which is the closest to zero compared to other pairs.*/
//Solution:
#include <stdio.h>
#include <stdlib.h>

int compare(const void* a, const void* b) {
    return (*(int*)a - *(int*)b);
}

int main() {
    int n;
    scanf("%d", &n);

    int arr[1000];
    for(int i = 0; i < n; i++)
        scanf("%d", &arr[i]);

    qsort(arr, n, sizeof(int), compare);

    int left = 0, right = n - 1;
    int minSum = arr[left] + arr[right];
    int first = arr[left], second = arr[right];

    while(left < right) {
        int sum = arr[left] + arr[right];

        if(abs(sum) < abs(minSum)) {
            minSum = sum;
            first = arr[left];
            second = arr[right];
        }

        if(sum < 0)
            left++;
        else
            right--;
    }

    printf("%d %d", first, second);

    return 0;
}`,
    leetcode: `int maxSubarraySumCircular(int* nums, int numsSize) {
    int total = 0;
    int maxSum = nums[0], currMax = 0;
    int minSum = nums[0], currMin = 0;

    for(int i = 0; i < numsSize; i++) {
        total += nums[i];

        currMax = (currMax > 0 ? currMax : 0) + nums[i];
        maxSum = (currMax > maxSum) ? currMax : maxSum;

        currMin = (currMin < 0 ? currMin : 0) + nums[i];
        minSum = (currMin < minSum) ? currMin : minSum;
    }

    if(maxSum < 0)
        return maxSum;

    return (total - minSum > maxSum) ? total - minSum : maxSum;
}
`
  },
    20: {
    github: `/*Problem: Given an array of integers, count the number of subarrays whose sum is equal to zero.

Input:
- First line: integer n
- Second line: n integers

Output:
- Print the count of subarrays having sum zero

Example:
Input:
6
1 -1 2 -2 3 -3

Output:
6

Explanation: A subarray is a continuous part of the array. For the input array 1 -1 2 -2 3 -3, the following subarrays have sum zero: [1, -1], [2, -2], [3, -3], [1, -1, 2, -2], [2, -2, 3, -3], and [1, -1, 2, -2, 3, -3]. Since there are 6 such subarrays, the output is 6.*/
#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);

    int arr[1000];
    for(int i = 0; i < n; i++)
        scanf("%d", &arr[i]);

    int count = 0;

    for(int i = 0; i < n; i++) {
        int sum = 0;
        for(int j = i; j < n; j++) {
            sum += arr[j];
            if(sum == 0)
                count++;
        }
    }

    printf("%d", count);

    return 0;
}`,
    leetcode: `#include <stdlib.h>

int compare(const void* a, const void* b) {
    return (*(int*)a - *(int*)b);
}

int** threeSum(int* nums, int numsSize, int* returnSize, int** returnColumnSizes) {
    *returnSize = 0;
    if(numsSize < 3) return NULL;

    qsort(nums, numsSize, sizeof(int), compare);

    int capacity = 100;
    int** result = (int**)malloc(capacity * sizeof(int*));
    *returnColumnSizes = (int*)malloc(capacity * sizeof(int));

    for(int i = 0; i < numsSize - 2; i++) {
        if(i > 0 && nums[i] == nums[i - 1]) continue;

        int left = i + 1;
        int right = numsSize - 1;

        while(left < right) {
            int sum = nums[i] + nums[left] + nums[right];

            if(sum == 0) {
                if(*returnSize == capacity) {
                    capacity *= 2;
                    result = realloc(result, capacity * sizeof(int*));
                    *returnColumnSizes = realloc(*returnColumnSizes, capacity * sizeof(int));
                }

                result[*returnSize] = (int*)malloc(3 * sizeof(int));
                result[*returnSize][0] = nums[i];
                result[*returnSize][1] = nums[left];
                result[*returnSize][2] = nums[right];
                (*returnColumnSizes)[*returnSize] = 3;
                (*returnSize)++;

                left++;
                right--;

                while(left < right && nums[left] == nums[left - 1]) left++;
                while(left < right && nums[right] == nums[right + 1]) right--;
            }
            else if(sum < 0) {
                left++;
            }
            else {
                right--;
            }
        }
    }

    return result;
}`
  },
    21: {
    github: `/*Problem: Create and Traverse Singly Linked List

Input:
- First line: integer n
- Second line: n space-separated integers

Output:
- Print the result

Example:
Input:
5
10 20 30 40 50

Output:
10 20 30 40 50*/

//Solution:
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

int main() {
    int n;
    scanf("%d", &n);

    struct Node *head = NULL, *temp = NULL, *newNode = NULL;

    for(int i = 0; i < n; i++) {
        newNode = (struct Node*)malloc(sizeof(struct Node));
        scanf("%d", &newNode->data);
        newNode->next = NULL;

        if(head == NULL) {
            head = newNode;
            temp = newNode;
        } else {
            temp->next = newNode;
            temp = newNode;
        }
    }

    temp = head;
    while(temp != NULL) {
        printf("%d ", temp->data);
        temp = temp->next;
    }

    return 0;
}`,
    leetcode: `struct ListNode* middleNode(struct ListNode* head) {
    struct ListNode* slow = head;
    struct ListNode* fast = head;

    while(fast != NULL && fast->next != NULL) {
        slow = slow->next;
        fast = fast->next->next;
    }

    return slow;
}`
  },
    22: {
    github: `/*Problem: Count Nodes in Linked List

Input:
- First line: integer n
- Second line: n space-separated integers

Output:
- Print the result

Example:
Input:
5
10 20 30 40 50

Output:
10 20 30 40 50*/

//Solution:
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

int main() {
    int n;
    scanf("%d", &n);

    struct Node *head = NULL, *temp = NULL, *newNode = NULL;

    for(int i = 0; i < n; i++) {
        newNode = (struct Node*)malloc(sizeof(struct Node));
        scanf("%d", &newNode->data);
        newNode->next = NULL;

        if(head == NULL) {
            head = newNode;
            temp = newNode;
        } else {
            temp->next = newNode;
            temp = newNode;
        }
    }

    int count = 0;
    temp = head;
    while(temp != NULL) {
        count++;
        temp = temp->next;
    }

    printf("%d", count);

    return 0;
}`,
    leetcode: `struct ListNode* reverseList(struct ListNode* head) {
    struct ListNode* prev = NULL;
    struct ListNode* curr = head;
    struct ListNode* nextNode = NULL;

    while(curr != NULL) {
        nextNode = curr->next;
        curr->next = prev;
        prev = curr;
        curr = nextNode;
    }

    return prev;
}`
  },
    23: {
    github: `/*Problem: Merge Two Sorted Linked Lists - Implement using linked list with dynamic memory allocation.

Input:
- First line: integer n
- Second line: n space-separated integers (first list)
- Third line: integer m
- Fourth line: m space-separated integers (second list)

Output:
- Print the merged linked list elements, space-separated

Example:
Input:
5
10 20 30 40 50
4
15 25 35 45

Output:
10 15 20 25 30 35 40 45 50

Explanation:
Compare nodes of both lists, append smaller to result, continue until all nodes are merged.*/
//Solution:
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

struct Node* createList(int n) {
    struct Node *head = NULL, *temp = NULL, *newNode = NULL;

    for(int i = 0; i < n; i++) {
        newNode = (struct Node*)malloc(sizeof(struct Node));
        scanf("%d", &newNode->data);
        newNode->next = NULL;

        if(head == NULL) {
            head = newNode;
            temp = newNode;
        } else {
            temp->next = newNode;
            temp = newNode;
        }
    }

    return head;
}

struct Node* mergeLists(struct Node* l1, struct Node* l2) {
    struct Node dummy;
    struct Node* tail = &dummy;
    dummy.next = NULL;

    while(l1 != NULL && l2 != NULL) {
        if(l1->data <= l2->data) {
            tail->next = l1;
            l1 = l1->next;
        } else {
            tail->next = l2;
            l2 = l2->next;
        }
        tail = tail->next;
    }

    if(l1 != NULL)
        tail->next = l1;
    else
        tail->next = l2;

    return dummy.next;
}

int main() {
    int n, m;
    scanf("%d", &n);
    struct Node* list1 = createList(n);

    scanf("%d", &m);
    struct Node* list2 = createList(m);

    struct Node* merged = mergeLists(list1, list2);

    while(merged != NULL) {
        printf("%d ", merged->data);
        merged = merged->next;
    }

    return 0;
}`,
    leetcode: `bool hasCycle(struct ListNode *head) {
    struct ListNode *slow = head;
    struct ListNode *fast = head;

    while(fast != NULL && fast->next != NULL) {
        slow = slow->next;
        fast = fast->next->next;

        if(slow == fast)
            return true;
    }

    return false;
}`
  },
    24: {
    github: `/*Problem: Delete First Occurrence of a Key - Implement using linked list with dynamic memory allocation.

Input:
- First line: integer n
- Second line: n space-separated integers
- Third line: integer key

Output:
- Print the linked list elements after deletion, space-separated

Example:
Input:
5
10 20 30 40 50
30

Output:
10 20 40 50

Explanation:
Traverse list, find first node with key, remove it by adjusting previous node's next pointer.*/
//Solution:
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

struct Node* createList(int n) {
    struct Node *head = NULL, *temp = NULL, *newNode = NULL;

    for(int i = 0; i < n; i++) {
        newNode = (struct Node*)malloc(sizeof(struct Node));
        scanf("%d", &newNode->data);
        newNode->next = NULL;

        if(head == NULL) {
            head = newNode;
            temp = newNode;
        } else {
            temp->next = newNode;
            temp = newNode;
        }
    }

    return head;
}

struct Node* deleteFirst(struct Node* head, int key) {
    if(head == NULL)
        return head;

    if(head->data == key) {
        struct Node* temp = head;
        head = head->next;
        free(temp);
        return head;
    }

    struct Node* curr = head;
    while(curr->next != NULL && curr->next->data != key) {
        curr = curr->next;
    }

    if(curr->next != NULL) {
        struct Node* temp = curr->next;
        curr->next = temp->next;
        free(temp);
    }

    return head;
}

int main() {
    int n, key;

    scanf("%d", &n);
    struct Node* head = createList(n);

    scanf("%d", &key);

    head = deleteFirst(head, key);

    struct Node* temp = head;
    while(temp != NULL) {
        printf("%d ", temp->data);
        temp = temp->next;
    }

    return 0;
}`,
    leetcode: `struct ListNode* removeElements(struct ListNode* head, int val) {
    struct ListNode dummy;
    dummy.next = head;

    struct ListNode* prev = &dummy;
    struct ListNode* curr = head;

    while(curr != NULL) {
        if(curr->val == val) {
            prev->next = curr->next;
        } else {
            prev = curr;
        }
        curr = curr->next;
    }

    return dummy.next;
}`
  },
    25: {
    github: `/*Problem: Count Occurrences of an Element in Linked List - Implement using linked list with dynamic memory allocation.

Input:
- First line: integer n (number of nodes)
- Second line: n space-separated integers (linked list elements)
- Third line: integer key (element to be counted)

Output:
- Print the number of times the key appears in the linked list

Example:
Input:
6
10 20 30 20 40 20
20

Output:
3

Explanation:
Traverse the linked list from head to end. Each time a node's data matches the given key, increment a counter. After traversal, print the final count.*/
//Solution:
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

struct Node* createList(int n) {
    struct Node *head = NULL, *temp = NULL, *newNode = NULL;

    for(int i = 0; i < n; i++) {
        newNode = (struct Node*)malloc(sizeof(struct Node));
        scanf("%d", &newNode->data);
        newNode->next = NULL;

        if(head == NULL) {
            head = newNode;
            temp = newNode;
        } else {
            temp->next = newNode;
            temp = newNode;
        }
    }

    return head;
}

int countOccurrences(struct Node* head, int key) {
    int count = 0;
    struct Node* temp = head;

    while(temp != NULL) {
        if(temp->data == key)
            count++;
        temp = temp->next;
    }

    return count;
}

int main() {
    int n, key;

    scanf("%d", &n);
    struct Node* head = createList(n);

    scanf("%d", &key);

    int result = countOccurrences(head, key);
    printf("%d", result);

    return 0;
}`,
    leetcode: `struct ListNode *detectCycle(struct ListNode *head) {
    struct ListNode *slow = head;
    struct ListNode *fast = head;

    while(fast != NULL && fast->next != NULL) {
        slow = slow->next;
        fast = fast->next->next;

        if(slow == fast) {
            slow = head;
            while(slow != fast) {
                slow = slow->next;
                fast = fast->next;
            }
            return slow;
        }
    }

    return NULL;
}`
  },
    26: {
    github: `/*Problem: Doubly Linked List Insertion and Traversal - Implement using linked list with dynamic memory allocation.

Input:
- First line: integer n
- Second line: n space-separated integers

Output:
- Print the linked list elements in forward order, space-separated

Example:
Input:
5
10 20 30 40 50

Output:
10 20 30 40 50

Explanation:
Each node has data, next, prev. Insert nodes sequentially, traverse from head using next pointer.*/
//Solution:
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
    struct Node* prev;
};

int main() {
    int n;
    scanf("%d", &n);

    struct Node *head = NULL, *temp = NULL, *newNode = NULL;

    for(int i = 0; i < n; i++) {
        newNode = (struct Node*)malloc(sizeof(struct Node));
        scanf("%d", &newNode->data);
        newNode->next = NULL;
        newNode->prev = NULL;

        if(head == NULL) {
            head = newNode;
            temp = newNode;
        } else {
            temp->next = newNode;
            newNode->prev = temp;
            temp = newNode;
        }
    }

    temp = head;
    while(temp != NULL) {
        printf("%d ", temp->data);
        temp = temp->next;
    }

    return 0;
}`,
    leetcode: `#include <stdlib.h>

typedef struct Node {
    int val;
    struct Node* next;
} Node;

typedef struct {
    Node* head;
    int size;
} MyLinkedList;

MyLinkedList* myLinkedListCreate() {
    MyLinkedList* obj = (MyLinkedList*)malloc(sizeof(MyLinkedList));
    obj->head = NULL;
    obj->size = 0;
    return obj;
}

int myLinkedListGet(MyLinkedList* obj, int index) {
    if(index < 0 || index >= obj->size)
        return -1;

    Node* curr = obj->head;
    for(int i = 0; i < index; i++)
        curr = curr->next;

    return curr->val;
}

void myLinkedListAddAtHead(MyLinkedList* obj, int val) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    newNode->val = val;
    newNode->next = obj->head;
    obj->head = newNode;
    obj->size++;
}

void myLinkedListAddAtTail(MyLinkedList* obj, int val) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    newNode->val = val;
    newNode->next = NULL;

    if(obj->head == NULL) {
        obj->head = newNode;
    } else {
        Node* curr = obj->head;
        while(curr->next != NULL)
            curr = curr->next;
        curr->next = newNode;
    }
    obj->size++;
}

void myLinkedListAddAtIndex(MyLinkedList* obj, int index, int val) {
    if(index > obj->size)
        return;

    if(index <= 0) {
        myLinkedListAddAtHead(obj, val);
        return;
    }

    if(index == obj->size) {
        myLinkedListAddAtTail(obj, val);
        return;
    }

    Node* newNode = (Node*)malloc(sizeof(Node));
    newNode->val = val;

    Node* curr = obj->head;
    for(int i = 0; i < index - 1; i++)
        curr = curr->next;

    newNode->next = curr->next;
    curr->next = newNode;
    obj->size++;
}

void myLinkedListDeleteAtIndex(MyLinkedList* obj, int index) {
    if(index < 0 || index >= obj->size)
        return;

    Node* temp;

    if(index == 0) {
        temp = obj->head;
        obj->head = obj->head->next;
        free(temp);
    } else {
        Node* curr = obj->head;
        for(int i = 0; i < index - 1; i++)
            curr = curr->next;

        temp = curr->next;
        curr->next = temp->next;
        free(temp);
    }

    obj->size--;
}

void myLinkedListFree(MyLinkedList* obj) {
    Node* curr = obj->head;
    while(curr != NULL) {
        Node* temp = curr;
        curr = curr->next;
        free(temp);
    }
    free(obj);
}`
  },
    27: {
    github: `/*Problem: Find Intersection Point of Two Linked Lists - Implement using linked list with dynamic memory allocation.

Input:
- First line: integer n
- Second line: n space-separated integers (first list)
- Third line: integer m
- Fourth line: m space-separated integers (second list)

Output:
- Print value of intersection node or 'No Intersection'

Example:
Input:
5
10 20 30 40 50
4
15 25 30 40 50

Output:
30

Explanation:
Calculate lengths, advance pointer in longer list, traverse both simultaneously. First common node is intersection.*/
//Solution:
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

struct Node* createList(int n) {
    struct Node *head = NULL, *temp = NULL, *newNode = NULL;

    for(int i = 0; i < n; i++) {
        newNode = (struct Node*)malloc(sizeof(struct Node));
        scanf("%d", &newNode->data);
        newNode->next = NULL;

        if(head == NULL) {
            head = newNode;
            temp = newNode;
        } else {
            temp->next = newNode;
            temp = newNode;
        }
    }
    return head;
}

int length(struct Node* head) {
    int len = 0;
    while(head != NULL) {
        len++;
        head = head->next;
    }
    return len;
}

int findIntersection(struct Node* head1, struct Node* head2) {
    int len1 = length(head1);
    int len2 = length(head2);

    struct Node *ptr1 = head1, *ptr2 = head2;

    int diff = abs(len1 - len2);

    if(len1 > len2) {
        for(int i = 0; i < diff; i++)
            ptr1 = ptr1->next;
    } else {
        for(int i = 0; i < diff; i++)
            ptr2 = ptr2->next;
    }

    while(ptr1 != NULL && ptr2 != NULL) {
        if(ptr1->data == ptr2->data)
            return ptr1->data;
        ptr1 = ptr1->next;
        ptr2 = ptr2->next;
    }

    return -1;
}

int main() {
    int n, m;

    scanf("%d", &n);
    struct Node* head1 = createList(n);

    scanf("%d", &m);
    struct Node* head2 = createList(m);

    int result = findIntersection(head1, head2);

    if(result == -1)
        printf("No Intersection");
    else
        printf("%d", result);

    return 0;
}`,
    leetcode: `Geeks for Geeks solution not availaible right now!`
  },
    28: {
    github: `/*Problem: Circular Linked List Creation and Traversal - Implement using linked list with dynamic memory allocation.

Input:
- First line: integer n
- Second line: n space-separated integers

Output:
- Print the circular linked list elements starting from head, space-separated

Example:
Input:
5
10 20 30 40 50

Output:
10 20 30 40 50

Explanation:
Last node's next points to head. Traverse from head until returning to head to avoid infinite loop.*/
//Solution:
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

int main() {
    int n;
    scanf("%d", &n);

    if(n <= 0)
        return 0;

    struct Node *head = NULL, *temp = NULL, *newNode = NULL;

    for(int i = 0; i < n; i++) {
        newNode = (struct Node*)malloc(sizeof(struct Node));
        scanf("%d", &newNode->data);
        newNode->next = NULL;

        if(head == NULL) {
            head = newNode;
            temp = newNode;
        } else {
            temp->next = newNode;
            temp = newNode;
        }
    }

    temp->next = head;

    struct Node* curr = head;
    do {
        printf("%d ", curr->data);
        curr = curr->next;
    } while(curr != head);

    return 0;
}`,
    leetcode: `bool isPalindrome(struct ListNode* head) {
    if(head == NULL || head->next == NULL)
        return true;

    struct ListNode *slow = head, *fast = head;

    // Find middle
    while(fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
    }

    // Reverse second half
    struct ListNode *prev = NULL, *curr = slow, *nextNode = NULL;
    while(curr) {
        nextNode = curr->next;
        curr->next = prev;
        prev = curr;
        curr = nextNode;
    }

    // Compare both halves
    struct ListNode *first = head, *second = prev;
    while(second) {
        if(first->val != second->val)
            return false;
        first = first->next;
        second = second->next;
    }

    return true;
}`
  },
    29: {
    github: `/*Problem: Rotate Linked List Right by k Places - Implement using linked list with dynamic memory allocation.

Input:
- First line: integer n
- Second line: n space-separated integers
- Third line: integer k

Output:
- Print the linked list elements after rotation, space-separated

Example:
Input:
5
10 20 30 40 50
2

Output:
40 50 10 20 30

Explanation:
Connect last node to head forming circular list. Traverse to (n-k)th node, set next to NULL, update head to (n-k+1)th node.*/
//Solution:
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

struct Node* createList(int n) {
    struct Node *head = NULL, *temp = NULL, *newNode = NULL;

    for(int i = 0; i < n; i++) {
        newNode = (struct Node*)malloc(sizeof(struct Node));
        scanf("%d", &newNode->data);
        newNode->next = NULL;

        if(head == NULL) {
            head = newNode;
            temp = newNode;
        } else {
            temp->next = newNode;
            temp = newNode;
        }
    }
    return head;
}

struct Node* rotateRight(struct Node* head, int k) {
    if(head == NULL || head->next == NULL || k == 0)
        return head;

    struct Node* temp = head;
    int length = 1;

    while(temp->next != NULL) {
        temp = temp->next;
        length++;
    }

    temp->next = head;

    k = k % length;
    int steps = length - k;

    while(steps--) {
        temp = temp->next;
    }

    head = temp->next;
    temp->next = NULL;

    return head;
}

int main() {
    int n, k;

    scanf("%d", &n);
    struct Node* head = createList(n);

    scanf("%d", &k);

    head = rotateRight(head, k);

    struct Node* temp = head;
    while(temp != NULL) {
        printf("%d ", temp->data);
        temp = temp->next;
    }

    return 0;
}`,
    leetcode: `struct ListNode* addTwoNumbers(struct ListNode* l1, struct ListNode* l2) {
    struct ListNode dummy;
    dummy.next = NULL;
    struct ListNode* tail = &dummy;

    int carry = 0;

    while(l1 != NULL || l2 != NULL || carry != 0) {
        int sum = carry;

        if(l1 != NULL) {
            sum += l1->val;
            l1 = l1->next;
        }

        if(l2 != NULL) {
            sum += l2->val;
            l2 = l2->next;
        }

        struct ListNode* newNode = 
            (struct ListNode*)malloc(sizeof(struct ListNode));

        newNode->val = sum % 10;
        newNode->next = NULL;

        carry = sum / 10;

        tail->next = newNode;
        tail = newNode;
    }

    return dummy.next;
}`
  },
    30: {
    github: `/*Problem: Polynomial Using Linked List - Implement using linked list with dynamic memory allocation.

Input:
- First line: integer n (number of terms)
- Next n lines: two integers (coefficient and exponent)

Output:
- Print polynomial in standard form, e.g., 10x^4 + 20x^3 + 30x^2 + 40x + 50

Example:
Input:
5
10 4
20 3
30 2
40 1
50 0

Output:
10x^4 + 20x^3 + 30x^2 + 40x + 50

Explanation:
Each node stores coefficient and exponent. Traverse nodes to print polynomial in decreasing exponent order.*/
//Solution:
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int coeff;
    int exp;
    struct Node* next;
};

int main() {
    int n;
    scanf("%d", &n);

    struct Node *head = NULL, *temp = NULL, *newNode = NULL;

    for(int i = 0; i < n; i++) {
        newNode = (struct Node*)malloc(sizeof(struct Node));
        scanf("%d %d", &newNode->coeff, &newNode->exp);
        newNode->next = NULL;

        if(head == NULL) {
            head = newNode;
            temp = newNode;
        } else {
            temp->next = newNode;
            temp = newNode;
        }
    }

    temp = head;
    while(temp != NULL) {
        if(temp->exp == 0)
            printf("%d", temp->coeff);
        else if(temp->exp == 1)
            printf("%dx", temp->coeff);
        else
            printf("%dx^%d", temp->coeff, temp->exp);

        if(temp->next != NULL)
            printf(" + ");

        temp = temp->next;
    }

    return 0;
}`,
    leetcode: `#include <stdlib.h>

struct ListNode* addTwoNumbers(struct ListNode* l1, struct ListNode* l2) {
    int stack1[100], stack2[100];
    int top1 = 0, top2 = 0;

    while(l1) {
        stack1[top1++] = l1->val;
        l1 = l1->next;
    }

    while(l2) {
        stack2[top2++] = l2->val;
        l2 = l2->next;
    }

    int carry = 0;
    struct ListNode* head = NULL;

    while(top1 > 0 || top2 > 0 || carry) {
        int sum = carry;

        if(top1 > 0)
            sum += stack1[--top1];

        if(top2 > 0)
            sum += stack2[--top2];

        struct ListNode* newNode =
            (struct ListNode*)malloc(sizeof(struct ListNode));

        newNode->val = sum % 10;
        newNode->next = head;
        head = newNode;

        carry = sum / 10;
    }

    return head;
}`
  },
    31: {
    github: `/*Problem: Implement a stack data structure using an array with the following operations: push, pop, and display.

Input:
- First line: integer n (number of operations)
- Next n lines: operation type and value (if applicable)
  - 1 value: push value
  - 2: pop
  - 3: display

Output:
- For display: print stack elements from top to bottom
- For pop: print popped element or 'Stack Underflow'

Example:
Input:
5
1 10
1 20
3
2
3

Output:
20 10
20
10*/

//Solution:
#include <stdio.h>
#define MAX 100

int stack[MAX];
int top = -1;

void push(int value) {
    if(top == MAX - 1) {
        printf("Stack Overflow\n");
        return;
    }
    stack[++top] = value;
}

void pop() {
    if(top == -1) {
        printf("Stack Underflow\n");
        return;
    }
    printf("%d\n", stack[top--]);
}

void display() {
    if(top == -1) {
        printf("Stack Underflow\n");
        return;
    }
    for(int i = top; i >= 0; i--)
        printf("%d ", stack[i]);
    printf("\n");
}

int main() {
    int n;
    scanf("%d", &n);

    while(n--) {
        int op, value;
        scanf("%d", &op);

        if(op == 1) {
            scanf("%d", &value);
            push(value);
        }
        else if(op == 2) {
            pop();
        }
        else if(op == 3) {
            display();
        }
    }

    return 0;
}`,
    leetcode: `#include <stdbool.h>
#include <string.h>

bool isValid(char *s) {
    int len = strlen(s);
    char stack[len];
    int top = -1;

    for(int i = 0; i < len; i++) {
        char ch = s[i];

        if(ch == '(' || ch == '{' || ch == '[') {
            stack[++top] = ch;
        }
        else {
            if(top == -1)
                return false;

            char open = stack[top--];

            if((ch == ')' && open != '(') ||
               (ch == '}' && open != '{') ||
               (ch == ']' && open != '['))
                return false;
        }
    }

    return top == -1;
}`
  },
    32: {
    github: `/*Problem: Implement push and pop operations on a stack and verify stack operations.

Input:
- First line: integer n
- Second line: n integers to push
- Third line: integer m (number of pops)

Output:
- Print remaining stack elements from top to bottom

Example:
Input:
5
10 20 30 40 50
2

Output:
30 20 10*/

//Solution:
#include <stdio.h>

#define MAX 100

int stack[MAX];
int top = -1;

void push(int x) {
    stack[++top] = x;
}

void pop() {
    if(top != -1)
        top--;
}

int main() {
    int n, m, x;

    scanf("%d", &n);

    for(int i = 0; i < n; i++) {
        scanf("%d", &x);
        push(x);
    }

    scanf("%d", &m);

    for(int i = 0; i < m; i++)
        pop();

    for(int i = top; i >= 0; i--)
        printf("%d ", stack[i]);

    return 0;
}`,
    leetcode: `#include <stdlib.h>

typedef struct {
    int *stack;
    int *minStack;
    int top;
    int minTop;
    int capacity;
} MinStack;

MinStack* minStackCreate() {
    MinStack* obj = (MinStack*)malloc(sizeof(MinStack));
    obj->capacity = 30000;
    obj->stack = (int*)malloc(sizeof(int) * obj->capacity);
    obj->minStack = (int*)malloc(sizeof(int) * obj->capacity);
    obj->top = -1;
    obj->minTop = -1;
    return obj;
}

void minStackPush(MinStack* obj, int val) {
    obj->stack[++obj->top] = val;

    if(obj->minTop == -1 || val <= obj->minStack[obj->minTop]) {
        obj->minStack[++obj->minTop] = val;
    }
}

void minStackPop(MinStack* obj) {
    if(obj->stack[obj->top] == obj->minStack[obj->minTop]) {
        obj->minTop--;
    }
    obj->top--;
}

int minStackTop(MinStack* obj) {
    return obj->stack[obj->top];
}

int minStackGetMin(MinStack* obj) {
    return obj->minStack[obj->minTop];
}

void minStackFree(MinStack* obj) {
    free(obj->stack);
    free(obj->minStack);
    free(obj);
}`
  },
    33: {
    github: `/*Problem: Convert an infix expression to postfix notation using stack.

Input:
- Single line: infix expression (operands are single characters)

Output:
- Print the postfix expression

Example:
Input:
A+B*C

Output:
ABC*+

Explanation:
Operator precedence: * > +
Use stack to handle operator precedence and associativity*/
//Solution:
#include <stdio.h>
#include <ctype.h>
#include <string.h>

char stack[100];
int top = -1;

void push(char x) {
    stack[++top] = x;
}

char pop() {
    return stack[top--];
}

char peek() {
    return stack[top];
}

int precedence(char op) {
    if(op == '+' || op == '-') return 1;
    if(op == '*' || op == '/') return 2;
    if(op == '^') return 3;
    return 0;
}

int main() {
    char infix[100], postfix[100];
    int k = 0;

    scanf("%s", infix);

    for(int i = 0; i < strlen(infix); i++) {

        if(isalnum(infix[i])) {
            postfix[k++] = infix[i];
        }

        else if(infix[i] == '(') {
            push(infix[i]);
        }

        else if(infix[i] == ')') {
            while(peek() != '(')
                postfix[k++] = pop();
            pop();
        }

        else {
            while(top != -1 && precedence(peek()) >= precedence(infix[i]))
                postfix[k++] = pop();

            push(infix[i]);
        }
    }

    while(top != -1)
        postfix[k++] = pop();

    postfix[k] = '\\0';

    printf("%s", postfix);

    return 0;
}
`,
    leetcode: `#include <stdlib.h>
#include <string.h>

int evalRPN(char** tokens, int tokensSize) {
    int stack[10000];
    int top = -1;

    for(int i = 0; i < tokensSize; i++) {

        if(strcmp(tokens[i], "+") == 0 ||
           strcmp(tokens[i], "-") == 0 ||
           strcmp(tokens[i], "*") == 0 ||
           strcmp(tokens[i], "/") == 0) {

            int b = stack[top--];
            int a = stack[top--];

            if(strcmp(tokens[i], "+") == 0)
                stack[++top] = a + b;
            else if(strcmp(tokens[i], "-") == 0)
                stack[++top] = a - b;
            else if(strcmp(tokens[i], "*") == 0)
                stack[++top] = a * b;
            else
                stack[++top] = a / b;
        }
        else {
            stack[++top] = atoi(tokens[i]);
        }
    }

    return stack[top];
}`
  }

}