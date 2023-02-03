import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { DeployScript, DeployScriptInterface } from "../../DeployArbitrumBridgeFacet.s.sol/DeployScript";
declare type DeployScriptConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class DeployScript__factory extends ContractFactory {
    constructor(...args: DeployScriptConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<DeployScript>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): DeployScript;
    connect(signer: Signer): DeployScript__factory;
    static readonly bytecode = "0x60806040526000805460ff191660011790553480156200001e57600080fd5b50604080518082018252601381527f417262697472756d42726964676546616365740000000000000000000000000060208201529051634bca482160e11b81526000805160206200409183398151915290639794904290620000a2906004016020808252600b908201526a505249564154455f4b455960a81b604082015260600190565b6020604051808303816000875af1158015620000c2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000e8919062000591565b60018190556040516001625e79b760e01b031981526004810191909152600080516020620040918339815191529063ffa18649906024016020604051808303816000875af11580156200013f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001659190620005ab565b600280546001600160a01b0319166001600160a01b039290921691909117905560405163350d56bf60e01b815260206004820152601760248201527f435245415445335f464143544f52595f414444524553530000000000000000006044820152600090600080516020620040918339815191529063350d56bf906064016020604051808303816000875af115801562000203573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620002299190620005ab565b60405163f877cb1960e01b8152909150600090600080516020620040918339815191529063f877cb1990620002799060040160208082526004908201526314d0531560e21b604082015260600190565b6000604051808303816000875af115801562000299573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620002c3919081019062000619565b90507f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c60601b60601c6001600160a01b031663d930a0e66040518163ffffffff1660e01b81526004016000604051808303816000875af11580156200032f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405262000359919081019062000619565b60069062000368908262000760565b5060405163f877cb1960e01b81526020600482015260076024820152664e4554574f524b60c81b6044820152600080516020620040918339815191529063f877cb19906064016000604051808303816000875af1158015620003ce573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620003f8919081019062000619565b60079062000407908262000760565b5060405163f877cb1960e01b815260206004820152600b60248201526a08c92988abea6aa8c8c92b60ab1b6044820152600080516020620040918339815191529063f877cb19906064016000604051808303816000875af115801562000471573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200049b919081019062000619565b600890620004aa908262000760565b508083604051602001620004c09291906200082c565b60408051808303601f190181529082905280516020909101206005819055600480546001600160a01b0319166001600160a01b03868116918217835560025463143c711960e21b865216918401919091526024830191909152906350f1c46490604401602060405180830381865afa15801562000541573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620005679190620005ab565b600380546001600160a01b0319166001600160a01b0392909216919091179055506200085f915050565b600060208284031215620005a457600080fd5b5051919050565b600060208284031215620005be57600080fd5b81516001600160a01b0381168114620005d657600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101562000610578181015183820152602001620005f6565b50506000910152565b6000602082840312156200062c57600080fd5b81516001600160401b03808211156200064457600080fd5b818401915084601f8301126200065957600080fd5b8151818111156200066e576200066e620005dd565b604051601f8201601f19908116603f01168101908382118183101715620006995762000699620005dd565b81604052828152876020848701011115620006b357600080fd5b620006c6836020830160208801620005f3565b979650505050505050565b600181811c90821680620006e657607f821691505b6020821081036200070757634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200075b57600081815260208120601f850160051c81016020861015620007365750805b601f850160051c820191505b81811015620007575782815560010162000742565b5050505b505050565b81516001600160401b038111156200077c576200077c620005dd565b62000794816200078d8454620006d1565b846200070d565b602080601f831160018114620007cc5760008415620007b35750858301515b600019600386901b1c1916600185901b17855562000757565b600085815260208120601f198616915b82811015620007fd57888601518255948401946001909101908401620007dc565b50858210156200081c5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000835162000840818460208801620005f3565b83519083019062000856818360208801620005f3565b01949350505050565b613822806200086f6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80633a76846314610046578063c04062261461008b578063f8ccbf47146100a1575b600080fd5b610061737109709ecfa91a80626ff3989d68f67f5b1dd12d81565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6100936100be565b604051610082929190610701565b6000546100ae9060ff1681565b6040519015158152602001610082565b6000606060007f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c60601b60601c73ffffffffffffffffffffffffffffffffffffffff1663d930a0e66040518163ffffffff1660e01b81526004016000604051808303816000875af115801561013a573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261018091908101906107f9565b6040516020016101909190610842565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290527f60f9bb110000000000000000000000000000000000000000000000000000000082529150600090737109709ecfa91a80626ff3989d68f67f5b1dd12d906360f9bb1190610211908590600401610883565b6000604051808303816000875af1158015610230573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261027691908101906107f9565b905060006102c4600760405160200161028f919061096a565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815291905283906105b2565b9050600061031260076040516020016102dd91906109c9565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815291905284906105b2565b6040805173ffffffffffffffffffffffffffffffffffffffff8086166020830152831691810191909152909150606001604080518083037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0018152908290526001547fce817d4700000000000000000000000000000000000000000000000000000000835260048301529550737109709ecfa91a80626ff3989d68f67f5b1dd12d9063ce817d4790602401600060405180830381600087803b1580156103d757600080fd5b505af11580156103eb573d6000803e3d6000fd5b5050505061041160035473ffffffffffffffffffffffffffffffffffffffff163b151590565b1561043957505060035473ffffffffffffffffffffffffffffffffffffffff16949293505050565b60045460055460405173ffffffffffffffffffffffffffffffffffffffff9092169163cdcb760a919061046e60208201610686565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe082820381018352601f9091011660408190526104b091908a90602001610a28565b6040516020818303038152906040526040518363ffffffff1660e01b81526004016104dc929190610a57565b6020604051808303816000875af11580156104fb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061051f9190610a95565b95507f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c60601b60601c73ffffffffffffffffffffffffffffffffffffffff166376eadd366040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561059257600080fd5b505af11580156105a6573d6000803e3d6000fd5b50505050505050509091565b6040517f85940ef1000000000000000000000000000000000000000000000000000000008152600090737109709ecfa91a80626ff3989d68f67f5b1dd12d906385940ef1906106079086908690600401610ab2565b6000604051808303816000875af1158015610626573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261066c91908101906107f9565b80602001905181019061067f9190610a95565b9392505050565b612d0c80610ae183390190565b60005b838110156106ae578181015183820152602001610696565b50506000910152565b600081518084526106cf816020860160208601610693565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b73ffffffffffffffffffffffffffffffffffffffff8316815260406020820152600061073060408301846106b7565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600067ffffffffffffffff8084111561078257610782610738565b604051601f85017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156107c8576107c8610738565b816040528093508581528686860111156107e157600080fd5b6107ef866020830187610693565b5050509392505050565b60006020828403121561080b57600080fd5b815167ffffffffffffffff81111561082257600080fd5b8201601f8101841361083357600080fd5b61073084825160208401610767565b60008251610854818460208701610693565b7f2f636f6e6669672f617262697472756d2e6a736f6e0000000000000000000000920191825250601501919050565b60208152600061067f60208301846106b7565b8054600090600181811c90808316806108b057607f831692505b602080841082036108ea577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b8180156108fe57600181146109315761095e565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff008616895284151585028901965061095e565b60008881526020902060005b868110156109565781548b82015290850190830161093d565b505084890196505b50505050505092915050565b7f2e000000000000000000000000000000000000000000000000000000000000008152600061099c6001830184610896565b7f2e67617465776179526f757465720000000000000000000000000000000000008152600e019392505050565b7f2e00000000000000000000000000000000000000000000000000000000000000815260006109fb6001830184610896565b7f2e696e626f78000000000000000000000000000000000000000000000000000081526006019392505050565b60008351610a3a818460208801610693565b835190830190610a4e818360208801610693565b01949350505050565b82815260406020820152600061073060408301846106b7565b73ffffffffffffffffffffffffffffffffffffffff81168114610a9257600080fd5b50565b600060208284031215610aa757600080fd5b815161067f81610a70565b604081526000610ac560408301856106b7565b8281036020840152610ad781856106b7565b9594505050505056fe60c06040523480156200001157600080fd5b5060405162002d0c38038062002d0c833981016040819052620000349162000069565b6001600160a01b039182166080521660a052620000a1565b80516001600160a01b03811681146200006457600080fd5b919050565b600080604083850312156200007d57600080fd5b62000088836200004c565b915062000098602084016200004c565b90509250929050565b60805160a051612c3e620000ce60003960006110630152600081816111df01526112580152612c3e6000f3fe6080604052600436106100295760003560e01c80633cc9517b1461002e578063c9851d0b14610043575b600080fd5b61004161003c3660046125bb565b610056565b005b610041610051366004612667565b61030d565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e234476126e5565b905086806101000151610121576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878061012001511561015f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101828160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101b9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101f7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610234576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610248604089013560208a01356126f8565b61025390893561270f565b9050600061026134476126e5565b90506102798c600001518d60c001518d8d338761056d565b60c08d015260808c015173ffffffffffffffffffffffffffffffffffffffff166102b357818c60c0018181516102af91906126e5565b9052505b6102c88c8a846102c385476126e5565b6106e5565b504793506000925050508282116102e05760006102ea565b6102ea83836126e5565b905080156102fe576102fe60008583610899565b50506000909255505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610388576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061039934476126e5565b905084806101000151156103d9576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610120015115610417576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8661043a8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610471576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036104af576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036104ec576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610500604089013560208a01356126f8565b61050b90893561270f565b905061051f89608001518a60c001516108cf565b61052b898983346106e5565b50479250600091505082821161054257600061054c565b61054c83836126e5565b905080156105605761056060008583610899565b5050600090925550505050565b6000838082036105a9576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600086866105b86001856126e5565b8181106105c7576105c7612722565b90506020028101906105d99190612751565b6105ea90608081019060600161278f565b905060006105f782610a45565b905073ffffffffffffffffffffffffffffffffffffffff82166106215761061e34826126e5565b90505b600061062d8989610afe565b90506106398989610c0a565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff89166020820152908101879052610674818b8b85610c6b565b60008361068086610a45565b61068a91906126e5565b90508b8110156106d5576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d9052602481018290526044015b60405180910390fd5b9c9b505050505050505050505050565b836107088160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561073f576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361077d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036107ba576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006107de866080015173ffffffffffffffffffffffffffffffffffffffff161590565b90506000816107ed57846107fc565b60c08701516107fc908661270f565b905080841015610838576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b811561084e57610849878787611061565b610859565b610859878787611190565b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f187604051610888919061281a565b60405180910390a150505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316156108c5576108c0838383611367565b505050565b6108c08282611496565b73ffffffffffffffffffffffffffffffffffffffff82166109285780341015610924576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b80600003610962576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156109cf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109f3919061292d565b905081811015610a39576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016106cc565b6108c0833330856115c0565b600073ffffffffffffffffffffffffffffffffffffffff821615610af6576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610acd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610af1919061292d565b610af8565b475b92915050565b60608160008167ffffffffffffffff811115610b1c57610b1c612309565b604051908082528060200260200182016040528015610b45578160200160208202803683370190505b5090506000805b83811015610bff57868682818110610b6657610b66612722565b9050602002810190610b789190612751565b610b8990608081019060600161278f565b9150610b9482610a45565b838281518110610ba657610ba6612722565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610bf75734838281518110610bdf57610bdf612722565b60200260200101818151610bf391906126e5565b9052505b600101610b4c565b509095945050505050565b60005b818110156108c0576000838383818110610c2957610c29612722565b9050602002810190610c3b9190612751565b610c4490612946565b90508060c0015115610c6257610c62816040015182608001516108cf565b50600101610c0d565b602084015160408501518491849184908360018114610f7a5760008686610c936001856126e5565b818110610ca257610ca2612722565b9050602002810190610cb49190612751565b610cc590608081019060600161278f565b9050600089815b81811015610e7257368d8d83818110610ce757610ce7612722565b9050602002810190610cf99190612751565b9050610d28610d0e606083016040840161278f565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610d8b5750610d8b610d41604083016020840161278f565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610da25750610da2610d41602083018361278f565b8015610e275750610e27610db960a08301836129eb565b610dc891600491600091612a57565b610dd191612a81565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610e5d576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8e51610e6990826117da565b50600101610ccc565b505060005b610e826001856126e5565b811015610f72576000898983818110610e9d57610e9d612722565b9050602002810190610eaf9190612751565b610ec090608081019060600161278f565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610f6957868281518110610f0757610f07612722565b6020026020010151610f1882610a45565b610f2291906126e5565b9250600073ffffffffffffffffffffffffffffffffffffffff821615610f49576000610f4b565b865b90508315610f6757610f67828a610f6284886126e5565b610899565b505b50600101610e77565b505050611055565b8760005b8181101561105257368b8b83818110610f9957610f99612722565b9050602002810190610fab9190612751565b9050610fc0610d0e606083016040840161278f565b80610fd95750610fd9610d41604083016020840161278f565b8015610ff05750610ff0610d41602083018361278f565b80156110075750611007610db960a08301836129eb565b61103d576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c5161104990826117da565b50600101610f7e565b50505b50505050505050505050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16636e6e8a6a828560c001516110ad919061270f565b60a086015160c08701516040805160e086901b7fffffffff0000000000000000000000000000000000000000000000000000000016815273ffffffffffffffffffffffffffffffffffffffff90931660048401819052602484019290925287356044840152606483018290526084830191909152602087013560a483015286013560c482015261010060e482015260006101048201526101240160206040518083038185885af1158015611165573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019061118a919061292d565b50505050565b60808301516040517fbda009fe00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff808316600483015261125692917f00000000000000000000000000000000000000000000000000000000000000009091169063bda009fe90602401602060405180830381865afa158015611228573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061124c9190612ac9565b8560c00151611af0565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d2ce7d658285608001518660a001518760c001518760200135886040013589600001356040516020016112d291815260406020820181905260009082015260600190565b6040516020818303038152906040526040518863ffffffff1660e01b815260040161130296959493929190612ae6565b60006040518083038185885af1158015611320573d6000803e3d6000fd5b50505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261118a9190810190612b6d565b73ffffffffffffffffffffffffffffffffffffffff83166113b4576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611421573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611445919061292d565b90508082111561148b576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016106cc565b61118a848484611c35565b73ffffffffffffffffffffffffffffffffffffffff82166114e3576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611526576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018290524760248201526044016106cc565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611580576040519150601f19603f3d011682016040523d82523d6000602084013e611585565b606091505b50509050806108c0576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff841661160d576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661165a576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa1580156116cb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116ef919061292d565b90506116fd82868686611d09565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa15801561176d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611791919061292d565b61179b91906126e5565b146117d2576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b6117f06117ea602083018361278f565b3b151590565b611826576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611866576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061187b610d0e606085016040860161278f565b61188657600061188c565b82608001355b905060006118a86118a3606086016040870161278f565b610a45565b905060006118bf6118a3608087016060880161278f565b9050826000036118f6576118f66118dc606087016040880161278f565b6118ec604088016020890161278f565b8760800135611af0565b8460800135821015611941576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044016106cc565b600080611951602088018861278f565b73ffffffffffffffffffffffffffffffffffffffff168561197560a08a018a6129eb565b604051611983929190612bb6565b60006040518083038185875af1925050503d80600081146119c0576040519150601f19603f3d011682016040523d82523d6000602084013e6119c5565b606091505b509150915081611a105760006119da82611d67565b9050806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106cc9190612bc6565b6000611a256118a360808a0160608b0161278f565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611a5660208b018b61278f565b611a6660608c0160408d0161278f565b611a7660808d0160608e0161278f565b8c60800135898711611a885786611a92565b611a928a886126e5565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316611b1057505050565b73ffffffffffffffffffffffffffffffffffffffff8216611b5d576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa158015611bd3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bf7919061292d565b90508181101561118a5761118a8484611c30847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6126e5565b611de5565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526108c09084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611ee3565b60405173ffffffffffffffffffffffffffffffffffffffff8085166024830152831660448201526064810182905261118a9085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611c87565b6060604482511015611dac57505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611dc86004808551611dc091906126e5565b859190611fef565b905080806020019051810190611dde9190612b6d565b9392505050565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa158015611e5c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e80919061292d565b611e8a919061270f565b60405173ffffffffffffffffffffffffffffffffffffffff851660248201526044810182905290915061118a9085907f095ea7b30000000000000000000000000000000000000000000000000000000090606401611c87565b6000611f45826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166121099092919063ffffffff16565b8051909150156108c05780806020019051810190611f639190612bd9565b6108c0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016106cc565b606081611ffd81601f61270f565b1015612035576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61203f828461270f565b84511015612079576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6060821580156120985760405191506000825260208201604052612100565b6040519150601f8416801560200281840101858101878315602002848b0101015b818310156120d15780518352602092830192016120b9565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b60606121188484600085612120565b949350505050565b6060824710156121b2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016106cc565b73ffffffffffffffffffffffffffffffffffffffff85163b612230576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016106cc565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516122599190612bf6565b60006040518083038185875af1925050503d8060008114612296576040519150601f19603f3d011682016040523d82523d6000602084013e61229b565b606091505b50915091506122ab8282866122b6565b979650505050505050565b606083156122c5575081611dde565b8251156122d55782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106cc9190612bc6565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561235c5761235c612309565b60405290565b60405160e0810167ffffffffffffffff8111828210171561235c5761235c612309565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156123cc576123cc612309565b604052919050565b600067ffffffffffffffff8211156123ee576123ee612309565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261242b57600080fd5b813561243e612439826123d4565b612385565b81815284602083860101111561245357600080fd5b816020850160208301376000918101602001919091529392505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461249257600080fd5b50565b80356124a081612470565b919050565b801515811461249257600080fd5b80356124a0816124a5565b600061014082840312156124d157600080fd5b6124d9612338565b905081358152602082013567ffffffffffffffff808211156124fa57600080fd5b6125068583860161241a565b6020840152604084013591508082111561251f57600080fd5b5061252c8482850161241a565b60408301525061253e60608301612495565b606082015261254f60808301612495565b608082015261256060a08301612495565b60a082015260c082013560c082015260e082013560e08201526101006125878184016124b3565b908201526101206125998382016124b3565b9082015292915050565b6000606082840312156125b557600080fd5b50919050565b60008060008060a085870312156125d157600080fd5b843567ffffffffffffffff808211156125e957600080fd5b6125f5888389016124be565b9550602087013591508082111561260b57600080fd5b818701915087601f83011261261f57600080fd5b81358181111561262e57600080fd5b8860208260051b850101111561264357600080fd5b60208301955080945050505061265c86604087016125a3565b905092959194509250565b6000806080838503121561267a57600080fd5b823567ffffffffffffffff81111561269157600080fd5b61269d858286016124be565b9250506126ad84602085016125a3565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610af857610af86126b6565b8082028115828204841417610af857610af86126b6565b80820180821115610af857610af86126b6565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261278557600080fd5b9190910192915050565b6000602082840312156127a157600080fd5b8135611dde81612470565b60005b838110156127c75781810151838201526020016127af565b50506000910152565b600081518084526127e88160208601602086016127ac565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152600060208301516101408060408501526128436101608501836127d0565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261287e83826127d0565b92505060608501516128a8608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e085015161010081818701528087015191505061012061291b8187018315159052565b90950151151593019290925250919050565b60006020828403121561293f57600080fd5b5051919050565b600060e0823603121561295857600080fd5b612960612362565b61296983612495565b815261297760208401612495565b602082015261298860408401612495565b604082015261299960608401612495565b60608201526080830135608082015260a083013567ffffffffffffffff8111156129c257600080fd5b6129ce3682860161241a565b60a0830152506129e060c084016124b3565b60c082015292915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612a2057600080fd5b83018035915067ffffffffffffffff821115612a3b57600080fd5b602001915036819003821315612a5057600080fd5b9250929050565b60008085851115612a6757600080fd5b83861115612a7457600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015612ac15780818660040360031b1b83161692505b505092915050565b600060208284031215612adb57600080fd5b8151611dde81612470565b600073ffffffffffffffffffffffffffffffffffffffff808916835280881660208401525085604083015284606083015283608083015260c060a0830152612b3160c08301846127d0565b98975050505050505050565b6000612b4b612439846123d4565b9050828152838383011115612b5f57600080fd5b611dde8360208301846127ac565b600060208284031215612b7f57600080fd5b815167ffffffffffffffff811115612b9657600080fd5b8201601f81018413612ba757600080fd5b61211884825160208401612b3d565b8183823760009101908152919050565b602081526000611dde60208301846127d0565b600060208284031215612beb57600080fd5b8151611dde816124a5565b600082516127858184602087016127ac56fea2646970667358221220533416ac761c0eecb4955cdb8f7bfab4ffede8c42cb02ffc259cbe1542dc468964736f6c63430008110033a2646970667358221220c511b818d92b44d5218dd92d814f1815a0c711258c4ccb55f0b4c6b0cda70c0a64736f6c634300081100330000000000000000000000007109709ecfa91a80626ff3989d68f67f5b1dd12d";
    static readonly abi: ({
        inputs: never[];
        stateMutability: string;
        type: string;
        name?: undefined;
        outputs?: undefined;
    } | {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): DeployScriptInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): DeployScript;
}
export {};
