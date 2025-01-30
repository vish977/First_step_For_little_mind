using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace First_step_For_little_mind.Shared.Helper;
public class Helper
{
    public static List<int> RandomNumberList(int randomNumberCount, int maxLimit)
    {
        Random random = new Random();
        List<int> randomNumbers = new List<int>();

        while (randomNumbers.Count < randomNumberCount)
        {
            int number = random.Next(0, maxLimit); // Generate a random number between 0 and maxLimit - 1

            if (!randomNumbers.Contains(number)) // Check if the number is already in the list
            {
                randomNumbers.Add(number); // Add the unique number to the list
            }
        }

        return randomNumbers;
    }
    public static List<T> rearangeTheAnswerList<T>(List<T> list)
    {
        List<T> copiedList = new List<T>(list);
        Random random = new Random();

        for (int i = list.Count - 1; i > 0; i--)
        {
            int randomIndex = random.Next(0, i + 1); // Get a random index
            // Swap elements
            T temp = copiedList[i];
            copiedList[i] = copiedList[randomIndex];
            copiedList[randomIndex] = temp;
        }

        return copiedList;
    }

}

