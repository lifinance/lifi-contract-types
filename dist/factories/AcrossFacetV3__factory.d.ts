import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { AcrossFacetV3, AcrossFacetV3Interface } from "../AcrossFacetV3";
declare type AcrossFacetV3ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AcrossFacetV3__factory extends ContractFactory {
    constructor(...args: AcrossFacetV3ConstructorParams);
    deploy(_spokePool: PromiseOrValue<string>, _wrappedNative: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<AcrossFacetV3>;
    getDeployTransaction(_spokePool: PromiseOrValue<string>, _wrappedNative: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): AcrossFacetV3;
    connect(signer: Signer): AcrossFacetV3__factory;
    static readonly bytecode = "0x60c060405234801562000010575f80fd5b50604051620029b4380380620029b4833981016040819052620000339162000063565b6001600160a01b039182166080521660a052620000a0565b6001600160a01b038116811462000060575f80fd5b50565b5f806040838503121562000075575f80fd5b825162000082816200004b565b602084015190925062000095816200004b565b809150509250929050565b60805160a0516128d8620000dc5f395f818160d7015261079301525f8181607b0152818161074901528181610845015261087001526128d85ff3fe60806040526004361061003e575f3560e01c806328832cbd1461004257806328cc431614610057578063afdac3d61461006a578063eb6d3a11146100c6575b5f80fd5b6100556100503660046121ec565b6100f9565b005b6100556100653660046122a2565b610335565b348015610075575f80fd5b5061009d7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b3480156100d1575f80fd5b5061009d7f000000000000000000000000000000000000000000000000000000000000000081565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610174576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f610184344761232f565b9050868061010001516101c3576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876101e68160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561021d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361025a576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610297576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102ab895f01518a60c001518a8a3361051e565b60c08a01525f6102ba8761236c565b9050670de0b6b3a76400006102d560a0890160808a01612447565b67ffffffffffffffff168b60c001516102ee9190612467565b6102f8919061247e565b60608201526103078a82610661565b504791505081811115610328576103285f84610323858561232f565b610977565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103b0576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6103c0344761232f565b9050846103e58160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561041c576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610459576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610496576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156104d4576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104e687608001518860c001516109ad565b6104f8876104f38861236c565b610661565b5047905081811115610513576105135f84610323858561232f565b50505f909155505050565b5f82808203610559576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f858561056760018561232f565b818110610576576105766124b6565b905060200281019061058891906124e3565b61059990608081019060600161251f565b90505f6105a582610b1f565b905073ffffffffffffffffffffffffffffffffffffffff82166105cf576105cc348261232f565b90505b5f6105da8888610bd5565b90506105e68888610cdf565b6105f38a89898985610d4b565b5f826105fe85610b1f565b610608919061232f565b905089811015610653576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b81610120015115155f82610120015151111515146106ab576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8161012001511580156106f15750805f015173ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff1614155b15610728576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608082015173ffffffffffffffffffffffffffffffffffffffff1661083b577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16637b9392328360c001518360200151845f01517f000000000000000000000000000000000000000000000000000000000000000086604001518860c0015188606001518a60e001518a60a001518b60c001518c60e001518d61010001518e61012001516040518e63ffffffff1660e01b81526004016108089c9b9a999897969594939291906125a3565b5f604051808303818588803b15801561081f575f80fd5b505af1158015610831573d5f803e3d5ffd5b505050505061093c565b61086e82608001517f00000000000000000000000000000000000000000000000000000000000000008460c001516110f5565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16637b9392328260200151835f0151856080015185604001518760c0015187606001518960e001518960a001518a60c001518b60e001518c61010001518d61012001516040518d63ffffffff1660e01b815260040161090e9c9b9a999897969594939291906125a3565b5f604051808303815f87803b158015610925575f80fd5b505af1158015610937573d5f803e3d5ffd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18260405161096b919061263a565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff8316156109a35761099e83838361122a565b505050565b61099e82826113a9565b805f036109e6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a3f5780341015610a3b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523360048201525f9073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610aa9573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610acd919061274c565b905081811015610b13576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161064a565b61099e833330856114cf565b5f73ffffffffffffffffffffffffffffffffffffffff821615610bcd576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610ba4573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610bc8919061274c565b610bcf565b475b92915050565b6060815f8167ffffffffffffffff811115610bf257610bf2611fb3565b604051908082528060200260200182016040528015610c1b578160200160208202803683370190505b5090505f805b83811015610cd457868682818110610c3b57610c3b6124b6565b9050602002810190610c4d91906124e3565b610c5e90608081019060600161251f565b9150610c6982610b1f565b838281518110610c7b57610c7b6124b6565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610ccc5734838281518110610cb457610cb46124b6565b60200260200101818151610cc8919061232f565b9052505b600101610c21565b509095945050505050565b5f5b8181101561099e5736838383818110610cfc57610cfc6124b6565b9050602002810190610d0e91906124e3565b9050610d2060e0820160c08301612763565b15610d4257610d42610d38606083016040840161251f565b82608001356109ad565b50600101610ce1565b838383838260018114611011575f8585610d6660018561232f565b818110610d7557610d756124b6565b9050602002810190610d8791906124e3565b610d9890608081019060600161251f565b90505f89815b81811015610f3f57368d8d83818110610db957610db96124b6565b9050602002810190610dcb91906124e3565b9050610dfa610de0606083016040840161251f565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610e5c5750610e5c610e13604083016020840161251f565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610e735750610e73610e13602083018361251f565b8015610ef65750610ef6610e8a60a083018361277e565b610e98916004915f916127e6565b610ea19161280d565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610f2c576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f368f826116e4565b50600101610d9e565b50505f5b610f4e60018561232f565b811015611009575f888883818110610f6857610f686124b6565b9050602002810190610f7a91906124e3565b610f8b90608081019060600161251f565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461100057858281518110610fd257610fd26124b6565b6020026020010151610fe382610b1f565b610fed919061232f565b9250821561100057611000818885610977565b50600101610f43565b5050506110e9565b875f5b818110156110e657368b8b8381811061102f5761102f6124b6565b905060200281019061104191906124e3565b9050611056610de0606083016040840161251f565b8061106f575061106f610e13604083016020840161251f565b80156110865750611086610e13602083018361251f565b801561109d575061109d610e8a60a083018361277e565b6110d3576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6110dd8d826116e4565b50600101611014565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661111557505050565b73ffffffffffffffffffffffffffffffffffffffff8216611162576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa1580156111d5573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906111f9919061274c565b101561099e5761099e83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6119b7565b73ffffffffffffffffffffffffffffffffffffffff8316611277576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166112c4576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201525f9073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa15801561132e573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611352919061274c565b905080821115611398576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161064a565b6113a3848484611b24565b50505050565b73ffffffffffffffffffffffffffffffffffffffff82166113f6576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611439576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810182905247602482015260440161064a565b5f8273ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f811461148f576040519150601f19603f3d011682016040523d82523d5f602084013e611494565b606091505b505090508061099e576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff841661151c576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611569576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285915f918316906370a0823190602401602060405180830381865afa1580156115d7573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906115fb919061274c565b905061160982868686611b7a565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015611677573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061169b919061274c565b6116a5919061232f565b146116dc576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b6116fa6116f4602083018361251f565b3b151590565b611730576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f81900361176f576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f611783610de0606085016040860161251f565b61178d575f611793565b82608001355b90505f6117ae6117a9606086016040870161251f565b610b1f565b90505f6117c46117a9608087016060880161251f565b9050825f036117fa576117fa6117e0606087016040880161251f565b6117f0604088016020890161251f565b87608001356110f5565b8460800135821015611845576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161064a565b5f80611854602088018861251f565b73ffffffffffffffffffffffffffffffffffffffff168561187860a08a018a61277e565b604051611886929190612855565b5f6040518083038185875af1925050503d805f81146118c0576040519150601f19603f3d011682016040523d82523d5f602084013e6118c5565b606091505b5091509150816118d8576118d881611bd8565b5f6118ec6117a960808a0160608b0161251f565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961191d60208b018b61251f565b61192d60608c0160408d0161251f565b61193d60808d0160608e0161251f565b8c6080013589871161194f5786611959565b6119598a8861232f565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b300000000000000000000000000000000000000000000000000000000179052611a438482611be2565b6113a35760405173ffffffffffffffffffffffffffffffffffffffff841660248201525f6044820152611b1a9085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611c9d565b6113a38482611c9d565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261099e9084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611a98565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526113a39085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611a98565b8051602082018181fd5b5f805f8473ffffffffffffffffffffffffffffffffffffffff1684604051611c0a9190612864565b5f604051808303815f865af19150503d805f8114611c43576040519150601f19603f3d011682016040523d82523d5f602084013e611c48565b606091505b5091509150818015611c72575080511580611c72575080806020019051810190611c729190612875565b8015611c94575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b5f611cfe826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611daa9092919063ffffffff16565b905080515f1480611d1e575080806020019051810190611d1e9190612875565b61099e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161064a565b6060611db884845f85611dc0565b949350505050565b606082471015611e52576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161064a565b5f808673ffffffffffffffffffffffffffffffffffffffff168587604051611e7a9190612864565b5f6040518083038185875af1925050503d805f8114611eb4576040519150601f19603f3d011682016040523d82523d5f602084013e611eb9565b606091505b5091509150611eca87838387611ed5565b979650505050505050565b60608315611f6a5782515f03611f635773ffffffffffffffffffffffffffffffffffffffff85163b611f63576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161064a565b5081611db8565b611db88383815115611f7f5781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064a9190612890565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff8111828210171561200457612004611fb3565b60405290565b5f82601f830112612019575f80fd5b813567ffffffffffffffff8082111561203457612034611fb3565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561207a5761207a611fb3565b81604052838152866020858801011115612092575f80fd5b836020870160208301375f602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff811681146120d4575f80fd5b919050565b80151581146120e6575f80fd5b50565b80356120d4816120d9565b5f6101408284031215612105575f80fd5b61210d611fe0565b905081358152602082013567ffffffffffffffff8082111561212d575f80fd5b6121398583860161200a565b60208401526040840135915080821115612151575f80fd5b5061215e8482850161200a565b604083015250612170606083016120b1565b6060820152612181608083016120b1565b608082015261219260a083016120b1565b60a082015260c082013560c082015260e082013560e08201526101006121b98184016120e9565b908201526101206121cb8382016120e9565b9082015292915050565b5f61014082840312156121e6575f80fd5b50919050565b5f805f80606085870312156121ff575f80fd5b843567ffffffffffffffff80821115612216575f80fd5b612222888389016120f4565b95506020870135915080821115612237575f80fd5b818701915087601f83011261224a575f80fd5b813581811115612258575f80fd5b8860208260051b850101111561226c575f80fd5b602083019550809450506040870135915080821115612289575f80fd5b50612296878288016121d5565b91505092959194509250565b5f80604083850312156122b3575f80fd5b823567ffffffffffffffff808211156122ca575f80fd5b6122d6868387016120f4565b935060208501359150808211156122eb575f80fd5b506122f8858286016121d5565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b81810381811115610bcf57610bcf612302565b803567ffffffffffffffff811681146120d4575f80fd5b803563ffffffff811681146120d4575f80fd5b5f610140823603121561237d575f80fd5b612385611fe0565b61238e836120b1565b815261239c602084016120b1565b60208201526123ad604084016120b1565b6040820152606083013560608201526123c860808401612342565b60808201526123d960a084016120b1565b60a08201526123ea60c08401612359565b60c08201526123fb60e08401612359565b60e082015261010061240e818501612359565b908201526101208381013567ffffffffffffffff81111561242d575f80fd5b6124393682870161200a565b918301919091525092915050565b5f60208284031215612457575f80fd5b61246082612342565b9392505050565b8082028115828204841417610bcf57610bcf612302565b5f826124b1577f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b500490565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612515575f80fd5b9190910192915050565b5f6020828403121561252f575f80fd5b612460826120b1565b5f5b8381101561255257818101518382015260200161253a565b50505f910152565b5f8151808452612571816020860160208601612538565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b73ffffffffffffffffffffffffffffffffffffffff8d811682528c811660208301528b811660408301528a81166060830152608082018a905260a0820189905260c08201889052861660e082015263ffffffff85811661010083015284811661012083015283166101408201525f61018061016083015261262861018083018461255a565b9e9d5050505050505050505050505050565b60208152815160208201525f602083015161014080604085015261266261016085018361255a565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261269d838261255a565b92505060608501516126c7608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e085015161010081818701528087015191505061012061273a8187018315159052565b90950151151593019290925250919050565b5f6020828403121561275c575f80fd5b5051919050565b5f60208284031215612773575f80fd5b8135612460816120d9565b5f8083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126127b1575f80fd5b83018035915067ffffffffffffffff8211156127cb575f80fd5b6020019150368190038213156127df575f80fd5b9250929050565b5f80858511156127f4575f80fd5b83861115612800575f80fd5b5050820193919092039150565b7fffffffff00000000000000000000000000000000000000000000000000000000813581811691600485101561284d5780818660040360031b1b83161692505b505092915050565b818382375f9101908152919050565b5f8251612515818460208701612538565b5f60208284031215612885575f80fd5b8151612460816120d9565b602081525f612460602083018461255a56fea264697066735822122089046f726b9fa9a7c37afeb25c080fed70c45394dc592be4f9637c28722d2c0e64736f6c63430008160033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_spokePool";
            readonly type: "address";
            readonly internalType: "contract IAcrossSpokePool";
        }, {
            readonly name: "_wrappedNative";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "spokePool";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IAcrossSpokePool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAcrossV3";
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
            readonly name: "_acrossData";
            readonly type: "tuple";
            readonly internalType: "struct AcrossFacetV3.AcrossV3Data";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "refundAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "outputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "outputAmountPercent";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "exclusiveRelayer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "exclusivityDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaAcrossV3";
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
            readonly name: "_acrossData";
            readonly type: "tuple";
            readonly internalType: "struct AcrossFacetV3.AcrossV3Data";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "refundAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "outputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "outputAmountPercent";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "exclusiveRelayer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "exclusivityDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "wrappedNative";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "event";
        readonly name: "AssetSwapped";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }, {
            readonly name: "dex";
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
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
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
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
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
    static createInterface(): AcrossFacetV3Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): AcrossFacetV3;
}
export {};
