import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { EverclearFacet, EverclearFacetInterface } from "../EverclearFacet";
type EverclearFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class EverclearFacet__factory extends ContractFactory {
    constructor(...args: EverclearFacetConstructorParams);
    deploy(_feeAdapter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<EverclearFacet>;
    getDeployTransaction(_feeAdapter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): EverclearFacet;
    connect(signer: Signer): EverclearFacet__factory;
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b5060405161261a38038061261a83398101604081905261002e91610066565b6001600160a01b038116610055576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052610093565b5f60208284031215610076575f5ffd5b81516001600160a01b038116811461008c575f5ffd5b9392505050565b60805161255b6100bf5f395f81816070015281816106b7015281816108000152610a82015261255b5ff3fe608060405260043610610033575f3560e01c8063089abd2c146100375780635c43f7e81461004c578063661d9c201461005f575b5f5ffd5b61004a610045366004611c1e565b6100bb565b005b61004a61005a366004611c83565b61033b565b34801561006a575f5ffd5b506100927f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610136576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6101463447611d49565b90508461016b8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101a2576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101df576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361021c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061010001511561025a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610298576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876102bb816080015173ffffffffffffffffffffffffffffffffffffffff161590565b156102f2576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61030489608001518a60c001516105be565b61030e8989610672565b50479250505081811115610330576103305f8461032b8585611d49565b610c5b565b50505f909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103b6576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6103c63447611d49565b905086806101000151610405576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610443576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886104668160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561049d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036104da576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610517576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8961053a816080015173ffffffffffffffffffffffffffffffffffffffff161590565b15610571576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105858b5f01518c60c001518c8c33610c90565b60c08c01526105948b89610672565b504792505050818111156105b1576105b15f8461032b8585611d49565b50505f9091555050505050565b805f036105f7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610650578034101561064c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61064c73ffffffffffffffffffffffffffffffffffffffff8316333084610dd2565b60408101356106ad576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106e082608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610e2a565b7311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff16036109da578035610763576040517f58b0510000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040805160018082528183019092525f9160208083019080368337019050509050660416edef1601be8360e00151036107cc5763536f6c4d815f815181106107ad576107ad611d81565b602002602001019063ffffffff16908163ffffffff16815250506107fe565b6040517f3ea0d59500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16633bd1c754836020013583855f0135876080015187604001358860c001358a60c001516108629190611d49565b61087260808b0160608c01611dc1565b61088260a08c0160808d01611df6565b61088f60a08d018d611e11565b60405180606001604052808f60c0013581526020018f60e0013581526020018f8061010001906108bf9190611e11565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525050509152506040517fffffffff0000000000000000000000000000000000000000000000000000000060e08e901b1681526109369a99989796959493929190600401611f7c565b5f6040518083038185885af1158015610951573d5f5f3e3d5ffd5b50505050506040513d5f823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526109979190810190612124565b505060e08301518351604051843581527f815cd8dc72093a13fe3577112c391b6279303956526382ab98772d0239dbf78c9060200160405180910390a350610c20565b60a082015173ffffffffffffffffffffffffffffffffffffffff16813514610a2e576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040805160018082528183019092525f91602080830190803683370190505090508260e00151815f81518110610a6657610a66611d81565b602002602001019063ffffffff16908163ffffffff16815250507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663b4c204778360200135838660a00151876080015187604001355f1c8860c001358a60c00151610ae79190611d49565b610af760808b0160608c01611dc1565b610b0760a08c0160808d01611df6565b610b1460a08d018d611e11565b60405180606001604052808f60c0013581526020018f60e0013581526020018f806101000190610b449190611e11565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525050509152506040517fffffffff0000000000000000000000000000000000000000000000000000000060e08e901b168152610bbb9a99989796959493929190600401612257565b5f6040518083038185885af1158015610bd6573d5f5f3e3d5ffd5b50505050506040513d5f823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610c1c9190810190612124565b5050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f182604051610c4f91906122f1565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff8316610c8557610c808282610e56565b505050565b610c80838383610ec3565b5f82808203610ccb576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585610cd9600185611d49565b818110610ce857610ce8611d81565b9050602002810190610cfa9190612404565b610d0b906080810190606001612440565b90505f610d1782610f31565b905073ffffffffffffffffffffffffffffffffffffffff8216610d4157610d3e3482611d49565b90505b5f610d4c8888610f7b565b9050610d588888611085565b610d658a898989856110f1565b5f82610d7085610f31565b610d7a9190611d49565b905089811015610dc4576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610e1d57637939f4245f526004601cfd5b5f60605260405250505050565b610c808383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6112b3565b73ffffffffffffffffffffffffffffffffffffffff8216610ea3576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61064c73ffffffffffffffffffffffffffffffffffffffff8316826113e0565b73ffffffffffffffffffffffffffffffffffffffff8216610f10576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610c8073ffffffffffffffffffffffffffffffffffffffff841683836113f9565b5f73ffffffffffffffffffffffffffffffffffffffff821615610f7357610f6e73ffffffffffffffffffffffffffffffffffffffff831630611442565b610f75565b475b92915050565b6060815f8167ffffffffffffffff811115610f9857610f98611987565b604051908082528060200260200182016040528015610fc1578160200160208202803683370190505b5090505f5f5b8381101561107a57868682818110610fe157610fe1611d81565b9050602002810190610ff39190612404565b611004906080810190606001612440565b915061100f82610f31565b83828151811061102157611021611d81565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216611072573483828151811061105a5761105a611d81565b6020026020010181815161106e9190611d49565b9052505b600101610fc7565b509095945050505050565b5f5b81811015610c8057368383838181106110a2576110a2611d81565b90506020028101906110b49190612404565b90506110c660e0820160c08301612459565b156110e8576110e86110de6060830160408401612440565b82608001356105be565b50600101611087565b83838383825f5b8181101561129957368a8a8381811061111357611113611d81565b90506020028101906111259190612404565b905061115461113a6060830160408401612440565b73ffffffffffffffffffffffffffffffffffffffff161590565b806111b657506111b661116d6040830160208401612440565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156111cd57506111cd61116d6020830183612440565b801561125057506112506111e460a0830183611e11565b6111f2916004915f91612472565b6111fb91612499565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611286576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6112908c82611475565b506001016110f8565b50506112a8848484845f6116e8565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156113da5773ffffffffffffffffffffffffffffffffffffffff831661131c576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa15801561138f573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906113b391906124ff565b10156113da576113da73ffffffffffffffffffffffffffffffffffffffff851684836118ff565b50505050565b5f385f3884865af161064c5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611439576390b8ec185f526004601cfd5b5f603452505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61148d6114856020830183612440565b6017903b1190565b6114c3576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611502576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61151661113a6060850160408601612440565b611520575f611526565b82608001355b90505f61154161153c6080860160608701612440565b610f31565b9050815f036115775761157761155d6060860160408701612440565b61156d6040870160208801612440565b8660800135610e2a565b5f806115866020870187612440565b73ffffffffffffffffffffffffffffffffffffffff16846115aa60a0890189611e11565b6040516115b8929190612516565b5f6040518083038185875af1925050503d805f81146115f2576040519150601f19603f3d011682016040523d82523d5f602084013e6115f7565b606091505b50915091508161160a5761160a8161197d565b5f61161e61153c6080890160608a01612440565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861164f60208a018a612440565b61165f60608b0160408c01612440565b61166f60808c0160608d01612440565b8b60800135898711611681578661168b565b61168b8a88611d49565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f86826116f7600182611d49565b81811061170657611706611d81565b90506020028101906117189190612404565b611729906080810190606001612440565b90505f5f5f5f5f5f5f5b888110156118ef5761174660018a611d49565b81108015611755575088600114155b15611830578d8d8281811061176c5761176c611d81565b905060200281019061177e9190612404565b61178f906080810190606001612440565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611830578a81815181106117d6576117d6611d81565b60200260200101516117e787610f31565b6117f19190611d49565b965073ffffffffffffffffffffffffffffffffffffffff861615611815575f611817565b895b93508387111561183057611830868d61032b878b611d49565b8d8d8281811061184257611842611d81565b90506020028101906118549190612404565b611865906060810190604001612440565b945061187085610f31565b925073ffffffffffffffffffffffffffffffffffffffff851615611894575f611896565b895b915081831180156118d357508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b156118e7576118e7858d61032b8587611d49565b600101611733565b5050505050505050505050505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611439575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661143957633e3f8f735f526004601cfd5b8051602082018181fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff811182821017156119d8576119d8611987565b60405290565b604051610180810167ffffffffffffffff811182821017156119d8576119d8611987565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611a4957611a49611987565b604052919050565b5f67ffffffffffffffff821115611a6a57611a6a611987565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b5f82601f830112611aa5575f5ffd5b8135611ab8611ab382611a51565b611a02565b818152846020838601011115611acc575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611b0b575f5ffd5b919050565b80358015158114611b0b575f5ffd5b5f6101408284031215611b30575f5ffd5b611b386119b4565b823581529050602082013567ffffffffffffffff811115611b57575f5ffd5b611b6384828501611a96565b602083015250604082013567ffffffffffffffff811115611b82575f5ffd5b611b8e84828501611a96565b604083015250611ba060608301611ae8565b6060820152611bb160808301611ae8565b6080820152611bc260a08301611ae8565b60a082015260c0828101359082015260e08083013590820152611be86101008301611b10565b610100820152611bfb6101208301611b10565b61012082015292915050565b5f6101208284031215611c18575f5ffd5b50919050565b5f5f60408385031215611c2f575f5ffd5b823567ffffffffffffffff811115611c45575f5ffd5b611c5185828601611b1f565b925050602083013567ffffffffffffffff811115611c6d575f5ffd5b611c7985828601611c07565b9150509250929050565b5f5f5f5f60608587031215611c96575f5ffd5b843567ffffffffffffffff811115611cac575f5ffd5b611cb887828801611b1f565b945050602085013567ffffffffffffffff811115611cd4575f5ffd5b8501601f81018713611ce4575f5ffd5b803567ffffffffffffffff811115611cfa575f5ffd5b8760208260051b8401011115611d0e575f5ffd5b60209190910193509150604085013567ffffffffffffffff811115611d31575f5ffd5b611d3d87828801611c07565b91505092959194509250565b81810381811115610f75577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b62ffffff81168114611dbe575f5ffd5b50565b5f60208284031215611dd1575f5ffd5b8135611ddc81611dae565b9392505050565b65ffffffffffff81168114611dbe575f5ffd5b5f60208284031215611e06575f5ffd5b8135611ddc81611de3565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611e44575f5ffd5b83018035915067ffffffffffffffff821115611e5e575f5ffd5b602001915036819003821315611e72575f5ffd5b9250929050565b5f8151808452602084019350602083015f5b82811015611eaf57815163ffffffff16865260209586019590910190600101611e8b565b5093949350505050565b81835281816020850137505f602082840101525f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b80518252602081015160208301525f604082015160606040850152611f746060850182611f00565b949350505050565b61012081525f611f9061012083018d611e79565b8b602084015273ffffffffffffffffffffffffffffffffffffffff8b16604084015289606084015288608084015262ffffff881660a084015265ffffffffffff871660c084015282810360e0840152611fea818688611eb9565b9050828103610100840152611fff8185611f4c565b9d9c50505050505050505050505050565b8051611b0b81611dae565b805163ffffffff81168114611b0b575f5ffd5b805167ffffffffffffffff81168114611b0b575f5ffd5b8051611b0b81611de3565b5f82601f83011261205f575f5ffd5b815167ffffffffffffffff81111561207957612079611987565b8060051b61208960208201611a02565b918252602081850181019290810190868411156120a4575f5ffd5b6020860192505b838310156120cd576120bc8361201b565b8252602092830192909101906120ab565b9695505050505050565b5f82601f8301126120e6575f5ffd5b81516120f4611ab382611a51565b818152846020838601011115612108575f5ffd5b8160208501602083015e5f918101602001919091529392505050565b5f5f60408385031215612135575f5ffd5b8251602084015190925067ffffffffffffffff811115612153575f5ffd5b83016101808186031215612165575f5ffd5b61216d6119de565b8151815260208083015190820152604080830151908201526060808301519082015261219b60808301612010565b60808201526121ac60a0830161201b565b60a08201526121bd60c0830161202e565b60c08201526121ce60e08301612045565b60e08201526121e06101008301612045565b610100820152610120828101519082015261014082015167ffffffffffffffff81111561220b575f5ffd5b61221787828501612050565b6101408301525061016082015167ffffffffffffffff811115612238575f5ffd5b612244878285016120d7565b6101608301525080925050509250929050565b61012081525f61226b61012083018d611e79565b73ffffffffffffffffffffffffffffffffffffffff8c16602084015273ffffffffffffffffffffffffffffffffffffffff8b16604084015273ffffffffffffffffffffffffffffffffffffffff8a16606084015288608084015262ffffff881660a084015265ffffffffffff871660c084015282810360e0840152611fea818688611eb9565b60208152815160208201525f60208301516101406040840152612318610160840182611f00565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526123538282611f00565b915050606084015161237d608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e08401516101008401526101008401516123ec61012085018215159052565b50610120840151801515610140850152509392505050565b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612436575f5ffd5b9190910192915050565b5f60208284031215612450575f5ffd5b611ddc82611ae8565b5f60208284031215612469575f5ffd5b611ddc82611b10565b5f5f85851115612480575f5ffd5b8386111561248c575f5ffd5b5050820193919092039150565b80357fffffffff0000000000000000000000000000000000000000000000000000000081169060048410156124f8577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f6020828403121561250f575f5ffd5b5051919050565b818382375f910190815291905056fea26469706673582212208cb2993c26d9d02300a9f45df65f8779ae82585dbdcca0367912ce5efd99110964736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_feeAdapter";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "FEE_ADAPTER";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IEverclearFeeAdapter";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaEverclear";
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
            readonly name: "_everclearData";
            readonly type: "tuple";
            readonly internalType: "struct EverclearFacet.EverclearData";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "nativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "outputAsset";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "maxFee";
                readonly type: "uint24";
                readonly internalType: "uint24";
            }, {
                readonly name: "ttl";
                readonly type: "uint48";
                readonly internalType: "uint48";
            }, {
                readonly name: "data";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "fee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "sig";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaEverclear";
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
            readonly name: "_everclearData";
            readonly type: "tuple";
            readonly internalType: "struct EverclearFacet.EverclearData";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "nativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "outputAsset";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "maxFee";
                readonly type: "uint24";
                readonly internalType: "uint24";
            }, {
                readonly name: "ttl";
                readonly type: "uint48";
                readonly internalType: "uint48";
            }, {
                readonly name: "data";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "fee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "sig";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
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
            readonly type: "bytes";
            readonly indexed: false;
            readonly internalType: "bytes";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "BridgeToNonEVMChainBytes32";
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
        readonly name: "InvalidAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidCallData";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidConfig";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidNonEVMReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NativeAssetNotSupported";
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
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnsupportedEverclearChainId";
        readonly inputs: readonly [];
    }];
    static createInterface(): EverclearFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): EverclearFacet;
}
export {};
