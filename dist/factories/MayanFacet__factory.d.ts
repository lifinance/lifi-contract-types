import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { MayanFacet, MayanFacetInterface } from "../MayanFacet";
declare type MayanFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MayanFacet__factory extends ContractFactory {
    constructor(...args: MayanFacetConstructorParams);
    deploy(_mayan: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<MayanFacet>;
    getDeployTransaction(_mayan: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): MayanFacet;
    connect(signer: Signer): MayanFacet__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b5060405162002b1538038062002b15833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b608051612a6d620000a8600039600081816073015281816108ba0152818161090401526109bd0152612a6d6000f3fe6080604052600436106100345760003560e01c806330c4895214610039578063b621b0321461004e578063bc98b5dc14610061575b600080fd5b61004c610047366004612461565b6100be565b005b61004c61005c366004612520565b6102f0565b34801561006d57600080fd5b506100957f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610139576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061014a3447612584565b905086806101000151610189576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156101c7576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101ea8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610221576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361025f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361029c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102b18a600001518b60c001518b8b33610514565b60c08b01526102c08a8861065c565b5047915050818111156102e2576102e26000846102dd8585612584565b610b16565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161036b576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061037c3447612584565b9050846103a18160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103d8576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610416576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610453576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610100015115610491576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b86806101200151156104cf576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104e188608001518960c00151610b4c565b6104eb888861065c565b504791505081811115610508576105086000846102dd8585612584565b50506000909155505050565b600082808203610550576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561055f600185612584565b81811061056e5761056e6125be565b905060200281019061058091906125ed565b61059190608081019060600161262b565b9050600061059e82610cc2565b905073ffffffffffffffffffffffffffffffffffffffff82166105c8576105c53482612584565b90505b60006105d48888610d7b565b90506105e08888610e87565b6105ed8a89898985610ef4565b6000826105f985610cc2565b6106039190612584565b90508981101561064e576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b600061066b604083018361264d565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050505060a084015190915073ffffffffffffffffffffffffffffffffffffffff167fffffffffffffffffffffffffee0eee0eee0eee0eee0eee0eee0eee0eee0eee0f016107bd578135610725576040517f4c568e590000000000000000000000000000000000000000000000000000000081528235600482015260006024820152604401610645565b6000610771610737604085018561264d565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506112a692505050565b9050823581146107b7576040517f4c568e590000000000000000000000000000000000000000000000000000000081528335600482015260248101829052604401610645565b50610865565b60006107cf610737604085018561264d565b60001c90508073ffffffffffffffffffffffffffffffffffffffff168460a0015173ffffffffffffffffffffffffffffffffffffffff16146108635760a08401516040517f9aa0267000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201529082166024820152604401610645565b505b6040805160a081018252600080825260208201819052918101829052606081018290526080810191909152608084015173ffffffffffffffffffffffffffffffffffffffff16156109a1576108e384608001517f00000000000000000000000000000000000000000000000000000000000000008660c00151611358565b608084015160c085015173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169163e4269fc4918461093c6040890160208a0161262b565b61094960408a018a61264d565b6040518763ffffffff1660e01b815260040161096a96959493929190612702565b600060405180830381600087803b15801561098457600080fd5b505af1158015610998573d6000803e3d6000fd5b50505050610a52565b60c084015173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063b0f584ff906109f4604087016020880161262b565b610a01604088018861264d565b6040518563ffffffff1660e01b8152600401610a1f93929190612783565b6000604051808303818588803b158015610a3857600080fd5b505af1158015610a4c573d6000803e3d6000fd5b50505050505b7311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168460a0015173ffffffffffffffffffffffffffffffffffffffff1603610ad95760e08401518451604051853581527f7be3e48a8a8b4d32138937e1809ac83481fffe48e49bb60e43ed1d3d50349e4c9060200160405180910390a35b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f184604051610b08919061282a565b60405180910390a150505050565b73ffffffffffffffffffffffffffffffffffffffff831615610b4257610b3d83838361149b565b505050565b610b3d828261161d565b80600003610b86576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610bdf5780341015610bdb576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610c4c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c70919061293d565b905081811015610cb6576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610645565b610b3d83333085611747565b600073ffffffffffffffffffffffffffffffffffffffff821615610d73576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610d4a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d6e919061293d565b610d75565b475b92915050565b60608160008167ffffffffffffffff811115610d9957610d9961221b565b604051908082528060200260200182016040528015610dc2578160200160208202803683370190505b5090506000805b83811015610e7c57868682818110610de357610de36125be565b9050602002810190610df591906125ed565b610e0690608081019060600161262b565b9150610e1182610cc2565b838281518110610e2357610e236125be565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610e745734838281518110610e5c57610e5c6125be565b60200260200101818151610e709190612584565b9052505b600101610dc9565b509095945050505050565b60005b81811015610b3d5736838383818110610ea557610ea56125be565b9050602002810190610eb791906125ed565b9050610ec960e0820160c08301612956565b15610eeb57610eeb610ee1606083016040840161262b565b8260800135610b4c565b50600101610e8a565b8383838382600181146111c15760008585610f10600185612584565b818110610f1f57610f1f6125be565b9050602002810190610f3191906125ed565b610f4290608081019060600161262b565b9050600089815b818110156110ed57368d8d83818110610f6457610f646125be565b9050602002810190610f7691906125ed565b9050610fa5610f8b606083016040840161262b565b73ffffffffffffffffffffffffffffffffffffffff161590565b806110085750611008610fbe604083016020840161262b565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561101f575061101f610fbe602083018361262b565b80156110a457506110a461103660a083018361264d565b61104591600491600091612973565b61104e9161299d565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6110da576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6110e48f82611961565b50600101610f49565b505060005b6110fd600185612584565b8110156111b9576000888883818110611118576111186125be565b905060200281019061112a91906125ed565b61113b90608081019060600161262b565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146111b057858281518110611182576111826125be565b602002602001015161119382610cc2565b61119d9190612584565b925082156111b0576111b0818885610b16565b506001016110f2565b50505061129a565b8760005b8181101561129757368b8b838181106111e0576111e06125be565b90506020028101906111f291906125ed565b9050611207610f8b606083016040840161262b565b806112205750611220610fbe604083016020840161262b565b80156112375750611237610fbe602083018361262b565b801561124e575061124e61103660a083018361264d565b611284576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61128e8d82611961565b506001016111c5565b50505b50505050505050505050565b602081015160009060e081901c806394454a5d811461130a576332ad465f81146113165763afd9b706811461132257636111ad25811461132e57631eb1cff0811461132e5763b866e173811461133a57638e8d142b81146113475760009350611350565b60a48501519350611350565b60c48501519350611350565b60848501519350611350565b60e48501519350611350565b6101048501519350611350565b61014485015193505b505050919050565b73ffffffffffffffffffffffffffffffffffffffff831661137857505050565b73ffffffffffffffffffffffffffffffffffffffff82166113c5576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa15801561143a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061145e919061293d565b1015610b3d5761147083836000611c3f565b610b3d83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611c3f565b73ffffffffffffffffffffffffffffffffffffffff83166114e8576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611535576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa1580156115a2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115c6919061293d565b90508082111561160c576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610645565b611617848484611e3f565b50505050565b73ffffffffffffffffffffffffffffffffffffffff821661166a576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b478111156116ad576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610645565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611707576040519150601f19603f3d011682016040523d82523d6000602084013e61170c565b606091505b5050905080610b3d576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8416611794576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166117e1576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015611852573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611876919061293d565b905061188482868686611e95565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa1580156118f4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611918919061293d565b6119229190612584565b14611959576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b611977611971602083018361262b565b3b151590565b6119ad576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036119ed576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611a02610f8b606085016040860161262b565b611a0d576000611a13565b82608001355b90506000611a2f611a2a606086016040870161262b565b610cc2565b90506000611a46611a2a608087016060880161262b565b905082600003611a7d57611a7d611a63606087016040880161262b565b611a73604088016020890161262b565b8760800135611358565b8460800135821015611ac8576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610645565b600080611ad8602088018861262b565b73ffffffffffffffffffffffffffffffffffffffff1685611afc60a08a018a61264d565b604051611b0a9291906129e5565b60006040518083038185875af1925050503d8060008114611b47576040519150601f19603f3d011682016040523d82523d6000602084013e611b4c565b606091505b509150915081611b5f57611b5f81611ef3565b6000611b74611a2a60808a0160608b0161262b565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611ba560208b018b61262b565b611bb560608c0160408d0161262b565b611bc560808d0160608e0161262b565b8c60800135898711611bd75786611be1565b611be18a88612584565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b801580611cdf57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611cb9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611cdd919061293d565b155b611d6b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610645565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610b3d9084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611efd565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610b3d9084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611dbd565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526116179085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611dbd565b8051602082018181fd5b6000611f5f826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff1661200c9092919063ffffffff16565b9050805160001480611f80575080806020019051810190611f8091906129f5565b610b3d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610645565b606061201b8484600085612023565b949350505050565b6060824710156120b5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610645565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516120de9190612a12565b60006040518083038185875af1925050503d806000811461211b576040519150601f19603f3d011682016040523d82523d6000602084013e612120565b606091505b50915091506121318783838761213c565b979650505050505050565b606083156121d25782516000036121cb5773ffffffffffffffffffffffffffffffffffffffff85163b6121cb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610645565b508161201b565b61201b83838151156121e75781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106459190612a24565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561226e5761226e61221b565b60405290565b600082601f83011261228557600080fd5b813567ffffffffffffffff808211156122a0576122a061221b565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156122e6576122e661221b565b816040528381528660208588010111156122ff57600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461234357600080fd5b919050565b801515811461235657600080fd5b50565b803561234381612348565b6000610140828403121561237757600080fd5b61237f61224a565b905081358152602082013567ffffffffffffffff808211156123a057600080fd5b6123ac85838601612274565b602084015260408401359150808211156123c557600080fd5b506123d284828501612274565b6040830152506123e46060830161231f565b60608201526123f56080830161231f565b608082015261240660a0830161231f565b60a082015260c082013560c082015260e082013560e082015261010061242d818401612359565b9082015261012061243f838201612359565b9082015292915050565b60006060828403121561245b57600080fd5b50919050565b6000806000806060858703121561247757600080fd5b843567ffffffffffffffff8082111561248f57600080fd5b61249b88838901612364565b955060208701359150808211156124b157600080fd5b818701915087601f8301126124c557600080fd5b8135818111156124d457600080fd5b8860208260051b85010111156124e957600080fd5b60208301955080945050604087013591508082111561250757600080fd5b5061251487828801612449565b91505092959194509250565b6000806040838503121561253357600080fd5b823567ffffffffffffffff8082111561254b57600080fd5b61255786838701612364565b9350602085013591508082111561256d57600080fd5b5061257a85828601612449565b9150509250929050565b81810381811115610d75577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261262157600080fd5b9190910192915050565b60006020828403121561263d57600080fd5b6126468261231f565b9392505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261268257600080fd5b83018035915067ffffffffffffffff82111561269d57600080fd5b6020019150368190038213156126b257600080fd5b9250929050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b600061012073ffffffffffffffffffffffffffffffffffffffff808a168452886020850152875160408501526020880151606085015260ff6040890151166080850152606088015160a0850152608088015160c085015280871660e0850152508061010084015261277681840185876126b9565b9998505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff841681526040602082015260006127b36040830184866126b9565b95945050505050565b60005b838110156127d75781810151838201526020016127bf565b50506000910152565b600081518084526127f88160208601602086016127bc565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152600060208301516101408060408501526128536101608501836127e0565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261288e83826127e0565b92505060608501516128b8608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e085015161010081818701528087015191505061012061292b8187018315159052565b90950151151593019290925250919050565b60006020828403121561294f57600080fd5b5051919050565b60006020828403121561296857600080fd5b813561264681612348565b6000808585111561298357600080fd5b8386111561299057600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156129dd5780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b600060208284031215612a0757600080fd5b815161264681612348565b600082516126218184602087016127bc565b60208152600061264660208301846127e056fea2646970667358221220368941181bcb823e67ca6b38806f0bfa32f0fdee072ea1db02d392715d55388f64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_mayan";
            readonly type: "address";
            readonly internalType: "contract IMayan";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "mayan";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IMayan";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaMayan";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_mayanData";
            readonly type: "tuple";
            readonly internalType: "struct MayanFacet.MayanData";
            readonly components: readonly [{
                readonly name: "nonEVMReceiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "mayanProtocol";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "protocolData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaMayan";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_swapData";
            readonly type: "tuple[]";
            readonly internalType: "struct LibSwap.SwapData[]";
            readonly components: readonly [{
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "approveTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "requiresDeposit";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_mayanData";
            readonly type: "tuple";
            readonly internalType: "struct MayanFacet.MayanData";
            readonly components: readonly [{
                readonly name: "nonEVMReceiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "mayanProtocol";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "protocolData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "event";
        readonly name: "BridgeToNonEVMChain";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiGenericSwapCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiSwappedGeneric";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferRecovered";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferStarted";
        readonly inputs: readonly [{
            readonly name: "bridgeData";
            readonly type: "tuple";
            readonly indexed: false;
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "CannotBridgeToSameNetwork";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ContractCallNotAllowed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "CumulativeSlippageTooHigh";
        readonly inputs: readonly [{
            readonly name: "minAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receivedAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InformationMismatch";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InsufficientBalance";
        readonly inputs: readonly [{
            readonly name: "required";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "balance";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InvalidAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidNonEVMReceiver";
        readonly inputs: readonly [{
            readonly name: "expected";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "actual";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [{
            readonly name: "expected";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "actual";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "NativeAssetTransferFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapDataProvided";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapFromZeroBalance";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoTransferToNullAddress";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAnERC20Token";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }];
    static createInterface(): MayanFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MayanFacet;
}
export {};
